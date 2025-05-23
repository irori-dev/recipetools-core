import { Recipe } from "../../src/types/recipe";

export const curryRecipe: Recipe = {
  title: "カレーライス",
  ingredients: [
    { id: "beef", name: "牛肉", quantity: 300, unit: "g" },
    { id: "potato", name: "じゃがいも", quantity: 3, unit: "個" },
    { id: "onion", name: "玉ねぎ", quantity: 2, unit: "個" },
    { id: "carrot", name: "にんじん", quantity: 1, unit: "本" },
    { id: "water", name: "水", quantity: 500, unit: "ml" },
    { id: "curry_roux", name: "カレールウ", quantity: 100, unit: "g" },
    { id: "oil", name: "サラダ油", quantity: 2, unit: "tbsp" }
  ],
  steps: [
    {
      id: "step1",
      action: "炒める",
      ingredients: ["oil", "beef"],
      duration: "PT5M",
      dependsOn: []
    },
    {
      id: "step2",
      action: "炒める",
      ingredients: ["potato", "onion", "carrot"],
      duration: "PT5M",
      dependsOn: ["step1"]
    },
    {
      id: "step3",
      action: "加える",
      ingredients: ["water"],
      duration: "PT1M",
      dependsOn: ["step2"]
    },
    {
      id: "step4",
      action: "煮る",
      ingredients: [],
      duration: "PT20M",
      dependsOn: ["step3"]
    },
    {
      id: "step5",
      action: "溶かす",
      ingredients: ["curry_roux"],
      duration: "PT5M",
      dependsOn: ["step4"]
    }
  ]
};
