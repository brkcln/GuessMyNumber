"use strict";
let score = 25;
let highScore = 0;
let randomNuber = Math.trunc(Math.random() * 25 + 1);

let sendMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
let bodyReset = function () {
  document.querySelector("body").style.backgroundColor = "#8e9775";
  document.querySelector("body").style.color = "#faf2da";
};
let bodyStart = function () {
  document.querySelector("body").style.backgroundColor = "#faf2da";
  document.querySelector("body").style.color = "#8e9775";
};
console.log(randomNuber);
// When click "send" button
document.querySelector(".send").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);
  //when no number
  if (!guessNumber) {
    sendMessage("You have to enter any number");
  } //when they are equal
  else if (guessNumber === randomNuber) {
    sendMessage("YEY ! You Won, Right Number..!");
    bodyStart();
    document.querySelector(".btn").style.border = "1px solid #8e9775";
    document.querySelector(".message").style.fontSize = "2.5em";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } //when high or low
  else if (guessNumber !== randomNuber) {
    if (score > 1) {
      sendMessage(
        guessNumber > randomNuber ? "Too high! try again" : "Too low! try again"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      sendMessage("You lost, Reset and try again..!");
    }
  }
});
// when click on "reset" button
document.querySelector(".reset").addEventListener("click", function () {
  randomNuber = Math.trunc(Math.random() * 25 + 1);
  score = 25;
  document.querySelector(".score").textContent = score;
  sendMessage("Lets Start !");
  bodyReset();
  document.querySelector(".message").style.fontSize = "25px";
  document.querySelector(".guess").value = "";
});
document.querySelector(".high").addEventListener("click", function () {
  document.querySelector(".highscore").textContent = "0";
});
