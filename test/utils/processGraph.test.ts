import { generateProcessGraph } from "../../src/utils/processGraph";
import { meatAndPotatoesRecipe } from "../recipes/meatAndPotatoesRecipe";

describe("generateProcessGraph", () => {
  it("should generate a mermaid graph from a recipe", () => {
    const graph = generateProcessGraph(meatAndPotatoesRecipe);
    expect(graph).toContain("graph TD");
    expect(graph).toContain("beef --> step1");
    expect(graph).toContain("step1 --> step2");
  });
});
