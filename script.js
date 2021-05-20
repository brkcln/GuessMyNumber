"use strict";
let score = 25;
let highScore = 0;
let randomNuber = Math.trunc(Math.random() * 25 + 1);

console.log(randomNuber);
document.querySelector(".send").addEventListener("click", function () {
  let guessNumber = Number(document.querySelector(".guess").value);
  if (!guessNumber) {
    document.querySelector(".message").textContent =
      "You have to enter any number";
  } else if (guessNumber == randomNuber) {
    document.querySelector(".message").textContent =
      "YEY ! You Won, Right Number..!";
    document.querySelector("body").style.backgroundColor = "#faf2da";
    document.querySelector("body").style.color = "#8e9775";
    document.querySelector(".send").style.border = "1px solid #8e9775";
    document.querySelector(".reset").style.border = "1px solid #8e9775";
    document.querySelector(".message").style.fontSize = "2.5em";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guessNumber > randomNuber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "WRONG! Its too high, try lower numbers.";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent =
        "U lose the game, Reset and try again..";
    }
  } else if (guessNumber < randomNuber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "WRONG! Its too low, try higher numbers.";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent =
        "U lose the game, Reset and try again..";
    }
  }
});
document.querySelector(".reset").addEventListener("click", function () {
  let randomNuber = Math.trunc(Math.random() * 25 + 1);
  score = 25;
  document.querySelector(".score").textContent = score;

  document.querySelector(".message").textContent = "Lets Start !";
  document.querySelector(".message").style.fontSize = "25px";

  document.querySelector("body").style.backgroundColor = "#8e9775";
  document.querySelector("body").style.color = "#faf2da";

  document.querySelector(".guess").value = "";
});
document.querySelector(".high").addEventListener("click", function () {
  document.querySelector(".highscore").textContent = "0";
});
