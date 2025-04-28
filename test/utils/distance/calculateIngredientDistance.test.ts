import { calculateIngredientDistance } from "../../../src/utils/distance/calculateIngredientDistance";
import { meatAndPotatoesRecipe } from "../../recipes/meatAndPotatoesRecipe";
import { curryRecipe } from "../../recipes/curryRecipe";

describe("calculateIngredientDistance", () => {
  it("should calculate ingredient distance between two recipes", () => {
    const distance = calculateIngredientDistance(meatAndPotatoesRecipe, curryRecipe);
    expect(distance).toBeGreaterThan(0);
    expect(distance).toBeLessThan(1);
  });
});
