import game from '../index.js';
import getRandomNumber from '../random.js';

const rules = 'What is the result of the expression?';

const calculator = (firstArgument, secondArgument, operator) => {
  switch (operator) {
    case '+':
      return firstArgument + secondArgument;
    case '-':
      return firstArgument - secondArgument;
    case '*':
      return firstArgument * secondArgument;
    default:
      return null;
  }
};

const getQuestionAndAnswer = () => {
  const operators = ['+', '-', '*'];
  const firstArgument = getRandomNumber(1, 50);
  const secondArgument = getRandomNumber(1, 50);
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${firstArgument} ${randomOperator} ${secondArgument}`;
  const correctAnswer = String(
    calculator(firstArgument, secondArgument, randomOperator),
  );

  return [question, correctAnswer];
};

const startGame = () => {
  game(rules, getQuestionAndAnswer);
};

export default startGame;
