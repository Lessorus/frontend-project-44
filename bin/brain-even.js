#!/usr/bin/env node
import readlineSync from 'readline-sync';
import game from '../src/index.js';

const Playgame = () => {
  let countSum = 0;
  const name = game();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  do {
    const randomNum = () => Math.floor(Math.random() * 100) + 1;
    const isEven = (num) => num % 2 === 0;
    const randomNumResult = randomNum();
    const correctAnswer = isEven(randomNumResult) ? 'yes' : 'no';

    console.log(`question ${randomNumResult}`);
    const useranswer = readlineSync.question('You answer: ');
    if (correctAnswer === useranswer.toLowerCase()) {
      console.log('Correct');
      countSum += 1;
    } else {
      console.log(`${useranswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  } while (countSum < 3);
  console.log(`Congratulations, ${name}`);
};
Playgame();
