/**
 * This function calculates each combination of three digits without repeat combinations
 */
export function printCombinations(): string {
  const combinations: string[] = [];

  // The loops going to 9 to get digits from {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
  for (let i = 0; i <= 9; i++) {
    // every loop starts on ({0, 1, 2, 3, 4, 5, 6, 7, 8, 9} - i) to avoid repeat numbers
    for (let j = i + 1; j <= 9; j++) {
      // every loop starts on (({0, 1, 2, 3, 4, 5, 6, 7, 8, 9} - i) - j) to avoid repeat numbers
      for (let k = j + 1; k <= 9; k++) {
        combinations.push(`${i}${j}${k}`);
      }
    }
  }

  return combinations.join(", ");
}
