'use strict';

const score = document.querySelector('.score');
const numberGuessDisplay = document.querySelector('.number');
const highscore = document.querySelector('.highscore');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelectorAll('.again');
const message = document.querySelector('.message');
const backgroundBody = document.querySelector('body');
const guess = document.querySelector('.guess');
let isPlay = true;
let randomNumber;
let xAttempts;

const randomNumberGenerator = () => {
  return Math.trunc(Math.random() * 20 + 1);
};

randomNumber = randomNumberGenerator();
xAttempts = 19;

btnAgain.forEach(btn => {
  btn.addEventListener('click', () => {
    message.textContent = 'Start guessing...';
    score.textContent = 20;
    xAttempts = 19;
    backgroundBody.style.background = '#222';
    randomNumber = randomNumberGenerator();
    numberGuessDisplay.textContent = '?';
    guess.value = '';
    isPlay = true;
  });
});

btnCheck.addEventListener('click', () => {
  const numberUser = Number(guess.value);

  if (isPlay) {
    if (!numberUser) {
      message.textContent = '⛔ No number!';
      return;
    }

    if (numberUser < 1 || numberUser > 20) {
      message.textContent = '⚠️ Only numbers between 1 and 20';
      return;
    }
    score.textContent = xAttempts;

    if (numberUser === randomNumber) {
      message.textContent = 'Correct number!🤠👍';
      backgroundBody.style.background = '#60b347';
      numberGuessDisplay.textContent = randomNumber;
      isPlay = false;

      if (highscore.textContent < xAttempts) {
        highscore.textContent = xAttempts;
      }
      return;
    }

    if (numberUser < randomNumber) {
      message.textContent = '📉 To low!';
      xAttempts--;
    } else if (numberUser > randomNumber) {
      message.textContent = '📈 To high!';
      xAttempts--;
    }
  }
});
