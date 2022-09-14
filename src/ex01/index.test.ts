import { printCombinations } from "./";

const combinations = printCombinations().split(", ");

describe("Combinations of three digits", () => {
  test("check no repeat numbers", () => {
    const uniqNumbers = Array.from(new Set(combinations));
    expect(combinations.length === uniqNumbers.length).toBe(true);
  });

  test("check  each item has three numbers", () => {
    expect(combinations.every((item) => item.length === 3)).toBe(true);
  });

  test("check each digit is a number", () => {
    expect(combinations.every((item) => !isNaN(Number(item)))).toBe(true);
  });
});
