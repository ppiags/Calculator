export type Operation = '+' | '-' | '*' | '/';

export const OPERATIONS: Operation[] = ['+', '-', '*', '/'];

export const handleNumberInput = (text: string): string => {
  return text.replace(/(?!^)-|[^\d-]/g, '');
};

export const calculate = (
  firstNumber: string,
  secondNumber: string,
  operation: Operation,
): number | null => {
  const [num1, num2] = [Number(firstNumber), Number(secondNumber)];

  const operations = {
    '+': () => num1 + num2,
    '-': () => num1 - num2,
    '*': () => num1 * num2,
    '/': () => (num2 !== 0 ? num1 / num2 : null),
  };

  return operations[operation]() ?? null;
};
