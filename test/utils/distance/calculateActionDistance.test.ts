import { calculateActionDistance } from "../../../src/utils/distance/calculateActionDistance";
import { meatAndPotatoesRecipe } from "../../recipes/meatAndPotatoesRecipe";
import { curryRecipe } from "../../recipes/curryRecipe";

describe("calculateActionDistance", () => {
  it("should calculate action distance between two recipes", () => {
    const distance = calculateActionDistance(meatAndPotatoesRecipe, curryRecipe);
    expect(distance).toBeGreaterThanOrEqual(0);
    expect(distance).toBeLessThanOrEqual(1);
  });
});
