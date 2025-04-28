import { validateRecipe } from "../../src/utils/validateRecipe";
import { meatAndPotatoesRecipe } from "../recipes/meatAndPotatoesRecipe";

describe("validateRecipe", () => {
  it("should return true for a valid recipe", () => {
    expect(validateRecipe(meatAndPotatoesRecipe)).toBe(true);
  });

  it("should return false for invalid recipe", () => {
    expect(validateRecipe({ title: "テストだけ" })).toBe(false);
  });
});
