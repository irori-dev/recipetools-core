import { Recipe, StepTiming } from "../types/recipe";
import { parseDurationToMinutes } from "./parseDurationToMinutes";
import { calculateStepTimings } from "./calculateStepTimings";

/**
 * レシピからMermaid記法のプロセス図を生成する
 */
export function generateProcessGraph(recipe: Recipe): string {
  const { steps, ingredients } = recipe;
  const timings = calculateStepTimings(steps);

  const lines: string[] = ["graph TD"];

  const stepLabels: Record<string, string> = {};
  const elapsedTimes: Record<string, number> = {};

  steps.forEach(step => {
    const parents = step.dependsOn;
    const parentElapsed = parents.length > 0
      ? Math.max(...parents.map(p => elapsedTimes[p] ?? 0))
      : 0;

    const ownDuration = parseDurationToMinutes(step.duration);
    const elapsed = parentElapsed + ownDuration;
    elapsedTimes[step.id] = elapsed;

    const ingredientsText = step.ingredients.length > 0
      ? `(${step.ingredients.join(", ")})`
      : "";
    const timeText = `\\n${timings[step.id].start}-${timings[step.id].end}min\\n累計:${elapsed}min`;

    stepLabels[step.id] = `${step.action}${ingredientsText}${timeText}`;
  });

  // 材料ノード作成
  ingredients.forEach(ing => {
    const label = ing.group
      ? `材料グループ: ${ing.name}`
      : `材料: ${ing.name}`;
    lines.push(`  ${ing.id}["${label}"]`);
  });

  // 材料→ステップ
  steps.forEach(step => {
    step.ingredients.forEach(ingId => {
      lines.push(`  ${ingId} --> ${step.id}`);
    });
  });

  // ステップ間
  steps.forEach(step => {
    step.dependsOn.forEach(dep => {
      lines.push(`  ${dep} --> ${step.id}`);
    });
  });

  // ステップノード（ラベルつき）
  steps.forEach(step => {
    if (!step.dependsOn.length) {
      // 開始ノードにはラベルを付ける
      lines.push(`  ${step.id}["${stepLabels[step.id]}"]`);
    }
  });

  return lines.join("\n");
}
