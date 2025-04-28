// 材料（Ingredient）
export interface Ingredient {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  preparation?: string;
  group?: string;
}

// 材料グループ（IngredientGroup）
export interface IngredientGroup {
  name: string;
  ingredients: string[]; // Ingredientのidリスト
}

// 手順（Step）
export interface Step {
  id: string;
  action: string;
  ingredients: string[]; // Ingredientのidリスト
  tool?: string;
  duration: string; // ISO8601 Duration形式 (例: "PT5M")
  canParallel?: boolean;
  dependsOn: string[]; // Stepのidリスト
}

// 道具（Tool）
export interface Tool {
  id: string;
  name: string;
}

// 栄養情報（Nutrition）
export interface Nutrition {
  calories?: number;
  protein?: string;
  fat?: string;
  carbohydrate?: string;
}

// レシピメタ情報（Metadata）
export interface Metadata {
  author: string;
  createdAt: string; // ISO8601 date-time形式
  updatedAt?: string;
}

// 出来上がり量（Yield）
export interface Yield {
  quantity: number;
  unit: string;
}

// レシピ本体（Recipe）
export interface Recipe {
  title: string;
  description?: string;
  metadata?: Metadata;
  yield?: Yield;
  nutrition?: Nutrition;
  ingredients: Ingredient[];
  ingredientGroups?: Record<string, IngredientGroup>;
  steps: Step[];
  tools?: Tool[];
  notes?: string[];
}

// タイムライン計算用（内部用）
export interface StepTiming {
  start: number; // 開始時刻（分）
  end: number;   // 終了時刻（分）
}
