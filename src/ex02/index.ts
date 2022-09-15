// Global variables
const OPERAND_STACK: number[] = []; // Track numbers
const OPERATOR_STACK: string[] = []; // Track operations

// Object with all actions
const actions = {
  "+": (leftNumber: number, rightNumber: number): number =>
    leftNumber + rightNumber,
  "-": (leftNumber: number, rightNumber: number): number =>
    leftNumber - rightNumber,
  "*": (leftNumber: number, rightNumber: number): number =>
    leftNumber * rightNumber,
  "/": (leftNumber: number, rightNumber: number): number =>
    leftNumber / rightNumber,
};

function calculatePrecedence(operator: string): number {
  switch (operator) {
    case "+":
    case "-":
      return 1;
    case "*":
    case "/":
      return 2;
  }

  return -1;
}

function isOperator(operator: string): boolean {
  return (
    operator === "/" ||
    operator === "*" ||
    operator === "+" ||
    operator === "-" ||
    operator === "("
  );
}

function calculate(): number {
  const leftNumber = OPERAND_STACK.pop();
  const rightNumber = OPERAND_STACK.pop();
  const action = OPERATOR_STACK.pop();
  return actions[action](rightNumber, leftNumber);
}

function getTopElementOfOperatorStack(): string {
  return OPERATOR_STACK[OPERATOR_STACK.length - 1];
}

export function evalExpression(expression: string): number {
  const cleanExpression = expression.replace(/\s/g, "");

  for (let i = 0; i < cleanExpression.length; i++) {
    let currentItem = cleanExpression.charAt(i);

    if (!isNaN(Number(currentItem))) {
      let num = "";

      // If number contains more than one digit we need to form it
      while (!isNaN(Number(currentItem))) {
        num = `${num}${currentItem}`;
        i++;
        if (i < cleanExpression.length) {
          currentItem = cleanExpression.charAt(i);
        } else {
          break;
        }
      }
      i--;
      OPERAND_STACK.push(Number(num));
    } else if (currentItem === "(") {
      OPERATOR_STACK.push(currentItem);
    } else if (currentItem === ")") {
      while (getTopElementOfOperatorStack() !== "(") {
        const output = calculate();
        OPERAND_STACK.push(output);
      }

      OPERATOR_STACK.pop();
    } else if (isOperator(currentItem)) {
      while (
        OPERATOR_STACK.length !== 0 &&
        calculatePrecedence(currentItem) <=
          calculatePrecedence(getTopElementOfOperatorStack())
      ) {
        const output = calculate();
        OPERAND_STACK.push(output);
      }

      OPERATOR_STACK.push(currentItem);
    } else {
      console.error("Invalid expression", [currentItem]);
    }
  }

  while (OPERATOR_STACK.length !== 0) {
    const output = calculate();
    OPERAND_STACK.push(output);
  }

  return OPERAND_STACK.pop();
}
