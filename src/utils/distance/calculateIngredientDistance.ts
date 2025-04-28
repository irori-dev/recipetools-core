import { Recipe } from "../../types/recipe";

/**
 * 材料ベースのレシピ距離（Jaccard距離）を計算する
 */
export function calculateIngredientDistance(recipe1: Recipe, recipe2: Recipe): number {
  const ingredients1 = new Set(recipe1.ingredients.map(ing => ing.id));
  const ingredients2 = new Set(recipe2.ingredients.map(ing => ing.id));

  const allIngredients = new Set([...ingredients1, ...ingredients2]);
  const commonIngredients = new Set(
    [...ingredients1].filter(id => ingredients2.has(id))
  );

  const jaccardDistance = 1 - (commonIngredients.size / allIngredients.size);
  return jaccardDistance;
}
