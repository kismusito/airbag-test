const POSSIBLE_WORDS = "abcdefghijklmnopqrstuvwxyz";

function getShiftWord(word: string, totalPositionsToMove: number): string {
  let cursor = POSSIBLE_WORDS.indexOf(word.toLowerCase());
  if (cursor >= 0) {
    for (let i = 0; i < totalPositionsToMove; i++) {
      if (cursor > POSSIBLE_WORDS.length - 1) {
        cursor = 0;
      } else {
        cursor += 1;
      }
    }
    return POSSIBLE_WORDS[cursor];
  } else {
    return word;
  }
}

export function shiftCipher(
  sentence: string,
  totalShiftPositions: number
): string {
  let newWord = "";
  for (let word of sentence) {
    newWord += getShiftWord(word, totalShiftPositions);
  }
  return newWord;
}
