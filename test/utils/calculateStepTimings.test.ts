import { calculateStepTimings } from "../../src/utils/calculateStepTimings";
import { meatAndPotatoesRecipe } from "../recipes/meatAndPotatoesRecipe";

describe("calculateStepTimings", () => {
  it("should correctly calculate timings for a simple recipe", () => {
    const timings = calculateStepTimings(meatAndPotatoesRecipe.steps);
    expect(timings.step1.start).toBe(0);
    expect(timings.step1.end).toBe(5);
    expect(timings.step2.start).toBe(5);
    expect(timings.step2.end).toBe(25);
  });
});
