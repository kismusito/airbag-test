const MAXIMUM_VALUE_PER_HAND = 21;

function calculateAceValue(
  handValue: number,
  handAces: string[],
  handWithoutAces: string[]
): number {
  if (
    handWithoutAces.find(
      (item) => item === "J" || item === "Q" || item === "K"
    ) &&
    handValue < MAXIMUM_VALUE_PER_HAND &&
    handAces.length > 1
  ) {
    return 1;
  } else {
    if (handValue + 11 > MAXIMUM_VALUE_PER_HAND) {
      return 1;
    }
  }
  return 11;
}

function calculateHandItemValue(
  handItem: string,
  handValue: number,
  handAces: string[],
  handWithoutAces: string[]
): number {
  if (!isNaN(Number(handItem))) {
    return Number(handItem);
  } else if (handItem === "J" || handItem === "Q" || handItem === "K") {
    return 10;
  } else if (handItem === "A") {
    return calculateAceValue(handValue, handAces, handWithoutAces);
  } else {
    return 0;
  }
}

export function blackjack(hand: string[]): number {
  let handValue = 0;
  const acesFromHand = hand.filter((item) => item === "A");
  const handWithoutAces = hand.filter((item) => item !== "A");

  // Send A items to last positions to evaluate if is 11 or 1
  for (let handItem of [...handWithoutAces, ...acesFromHand]) {
    handValue += calculateHandItemValue(
      handItem,
      handValue,
      acesFromHand,
      handWithoutAces
    );
  }

  return handValue;
}
