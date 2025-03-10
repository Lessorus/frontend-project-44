import game from '../index.js';
import getRandomNumber from '../random.js';

const rules = 'Find the greatest common divisor of given numbers.';
const getGCD = (firstArgument, secondArgument) => {
  if (secondArgument === 0) {
    return firstArgument;
  }

  return getGCD(secondArgument, firstArgument % secondArgument);
};

const getQuestionAndAnswer = () => {
  const firstArgument = getRandomNumber(1, 10);
  const secondArgument = getRandomNumber(1, 10);
  const question = `${firstArgument} ${secondArgument}`;
  const correctAnswer = String(getGCD(firstArgument, secondArgument));

  return [question, correctAnswer];
};

const startGame = () => {
  game(rules, getQuestionAndAnswer);
};

export default startGame;
