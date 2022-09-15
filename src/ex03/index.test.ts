import { clearDuplicates } from "./index";

test("check duplicates", () => {
  expect(clearDuplicates([4, 3, 4, 3, 1, 7, 8, 8])).toEqual([4, 3, 1, 7, 8]);
  expect(clearDuplicates([4, 3, 4, 3, 1, 7, 8, 8, 9, 2, 4, 5])).toEqual([
    4, 3, 1, 7, 8, 9, 2, 5,
  ]);
});
