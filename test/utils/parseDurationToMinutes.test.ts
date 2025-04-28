import { parseDurationToMinutes } from "../../src/utils/parseDurationToMinutes";

describe("parseDurationToMinutes", () => {
  it("should parse minutes correctly", () => {
    expect(parseDurationToMinutes("PT5M")).toBe(5);
  });

  it("should parse hours and minutes correctly", () => {
    expect(parseDurationToMinutes("PT2H30M")).toBe(150);
  });

  it("should parse seconds correctly", () => {
    expect(parseDurationToMinutes("PT45S")).toBeCloseTo(0.75);
  });

  it("should return 0 for invalid input", () => {
    expect(parseDurationToMinutes("INVALID")).toBe(0);
  });
});
