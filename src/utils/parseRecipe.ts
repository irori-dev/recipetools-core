import { Recipe } from "../types/recipe";

/**
 * 任意のデータを型安全なRecipe型に変換する関数
 * （※現時点では最低限のチェックのみ）
 */
export function parseRecipe(data: unknown): Recipe {
  if (typeof data !== "object" || data === null) {
    throw new Error("Invalid recipe data: not an object");
  }

  const recipe = data as Recipe;

  if (typeof recipe.title !== "string") {
    throw new Error("Invalid recipe data: title must be a string");
  }
  if (!Array.isArray(recipe.ingredients)) {
    throw new Error("Invalid recipe data: ingredients must be an array");
  }
  if (!Array.isArray(recipe.steps)) {
    throw new Error("Invalid recipe data: steps must be an array");
  }

  // ここまで通ったら最低限OKとみなす
  return recipe;
}
