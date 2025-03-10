import game from '../index.js';
import getRandomNumber from '../random.js';

const rules = 'What number is missing in the progression?';

const getProgretion = (startNumber, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    if (progression.length === 0) {
      progression.push(startNumber);
    } else {
      const previousNumber = progression[i - 1];
      const nextNumber = previousNumber + step;
      progression.push(nextNumber);
    }
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const startNumber = getRandomNumber(0, 15);
  const step = getRandomNumber(1, 10);
  const length = 10;
  const progression = getProgretion(startNumber, step, length);
  const indexOfMissingNumber = getRandomNumber(0, length - 1);
  const correctAnswer = String(progression[indexOfMissingNumber]);
  progression[indexOfMissingNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const startGame = () => {
  game(rules, getQuestionAndAnswer);
};

export default startGame;
