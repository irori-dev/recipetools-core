import { parseRecipe } from "../../src/utils/parseRecipe";
import { meatAndPotatoesRecipe } from "../recipes/meatAndPotatoesRecipe";

describe("parseRecipe", () => {
  it("should parse a valid recipe object", () => {
    const parsed = parseRecipe(meatAndPotatoesRecipe);
    expect(parsed.title).toBe("肉じゃが");
    expect(parsed.ingredients.length).toBeGreaterThan(0);
    expect(parsed.steps.length).toBeGreaterThan(0);
  });

  it("should throw an error for invalid input", () => {
    expect(() => parseRecipe(null)).toThrow();
    expect(() => parseRecipe({})).toThrow();
    expect(() => parseRecipe({ title: "Test" })).toThrow();
  });
});
