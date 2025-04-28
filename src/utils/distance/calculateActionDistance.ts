import { Recipe } from "../../types/recipe";

/**
 * アクションベースのレシピ距離（Jaccard距離）を計算する
 */
export function calculateActionDistance(recipe1: Recipe, recipe2: Recipe): number {
  const actions1 = new Set(recipe1.steps.map(step => step.action));
  const actions2 = new Set(recipe2.steps.map(step => step.action));

  const allActions = new Set([...actions1, ...actions2]);
  const commonActions = new Set(
    [...actions1].filter(action => actions2.has(action))
  );

  const jaccardDistance = 1 - (commonActions.size / allActions.size);
  return jaccardDistance;
}
