import { Step, StepTiming } from "../types/recipe";
import { parseDurationToMinutes } from "./parseDurationToMinutes";

/**
 * 各Stepの開始時刻・終了時刻を計算する
 *
 * @param steps レシピの手順配列
 * @returns Stepごとのタイミング情報（start, end in minutes）
 */
export function calculateStepTimings(steps: Step[]): Record<string, StepTiming> {
  const timings: Record<string, StepTiming> = {};
  const unresolved = [...steps]; // まだ処理してないStep

  while (unresolved.length > 0) {
    const step = unresolved.shift()!;

    // dependsOnに指定された親ステップたちの終了時間を取得
    const parentEnds = step.dependsOn
      .map(dep => timings[dep]?.end)
      .filter((end): end is number => end !== undefined);

    if (step.dependsOn.length > 0 && parentEnds.length < step.dependsOn.length) {
      // まだ親が全部終わってなかったら後回し
      unresolved.push(step);
      continue;
    }

    // 開始時刻 = 親ステップの終了時間の最大値 or 0
    const start = parentEnds.length > 0 ? Math.max(...parentEnds) : 0;
    const durationMinutes = parseDurationToMinutes(step.duration);
    const end = start + durationMinutes;

    timings[step.id] = { start, end };
  }

  return timings;
}
