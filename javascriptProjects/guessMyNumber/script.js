"use strict";
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// const secretNumber = Math.trunc(Math.random() * 20) + 1;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0; // initialize variable

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No number!";

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = secretNumber;

    // make the page background into light green - the hex number
    // commented out in the CSS file
    document.querySelector("body").style.backgroundColor = "#60b347";

    // make the part wider where the number is displayed.
    // The current width is 15rem, from .number in the CSS file.
    // Double the size and type this in as a string to change
    // it here, so '30rem'
    document.querySelector(".number").style.width = "30rem";

    // check the high score and if the current score is higher,
    // then set and display the high score to the current score
    // This works

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// if Again is clicked, reset the game to start over again
document.querySelector(".again").addEventListener("click", function () {
  // find a new secret number for the next game round
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // make the page background black again. I got this 222 number
  // from the CSS file
  document.querySelector("body").style.backgroundColor = "#222";

  // make the part narrower again where the number is displayed.
  // The current width was widened to 30rem. Put it back
  // to 15rem, from .number in the CSS file, and type it in
  // as a string, so '15rem'
  document.querySelector(".number").style.width = "15rem";

  // set the secret number message back to "Start guessing..."
  document.querySelector(".message").textContent = "Start guessing...";

  // set the number slot in the centre back to ?
  document.querySelector(".number").textContent = "?";

  // set the current score back to 20.
  // I changed it from "let score = 20;"" to "score = 20" and this
  // worked. Don't put an extra 'let' in there.
  score = 20;
  document.querySelector(".score").textContent = score;

  // put a blank back into the number guessing box. This works
  document.querySelector(".guess").value = "";
});
