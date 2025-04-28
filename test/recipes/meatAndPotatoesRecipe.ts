import { Recipe } from "../../src/types/recipe";

export const meatAndPotatoesRecipe: Recipe = {
  title: "肉じゃが",
  ingredients: [
    { id: "beef", name: "牛肉薄切り", quantity: 300, unit: "g" },
    { id: "potato", name: "じゃがいも", quantity: 4, unit: "個" },
    { id: "onion", name: "玉ねぎ", quantity: 2, unit: "個" },
    { id: "carrot", name: "にんじん", quantity: 1, unit: "本" },
    { id: "water", name: "水", quantity: 300, unit: "ml" }
  ],
  steps: [
    {
      id: "step1",
      action: "炒める",
      ingredients: ["beef"],
      duration: "PT5M",
      dependsOn: []
    },
    {
      id: "step2",
      action: "煮る",
      ingredients: ["potato", "onion", "carrot", "water"],
      duration: "PT20M",
      dependsOn: ["step1"]
    }
  ]
};
