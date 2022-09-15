import { evalExpression } from "./";

test("calculate expressions", () => {
  expect(evalExpression("3 + 42 * (1 - 2 / (3 + 4) - 1 * 21) + 1")).toBe(-848);
  expect(evalExpression("2 * (5 *( 3 + 6 ) ) / 15 - 2")).toBe(4);
});
