import { Recipe } from "../types/recipe";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import schema from "../schemas/recipeSchema.json";

// ajvインスタンス作成
const ajv = new Ajv();
// 標準フォーマット（date-time含む）を追加
addFormats(ajv);

/**
 * レシピデータが正しいかどうかを検証する関数
 */
export function validateRecipe(data: unknown): data is Recipe {
  const validate = ajv.compile(schema);
  const valid = validate(data);

  return valid as boolean;
}
