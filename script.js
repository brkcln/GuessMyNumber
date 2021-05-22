"use strict";
let score = 10;
let highScore = 0;
let randomNuber = Math.trunc(Math.random() * 50 + 1);
let a = randomNuber - 5;
let b = randomNuber + 5;

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
    document.querySelector(".timerLeft").style.visibility = "hidden";
    sendMessage("YEY ! You Won, Right Number..!");
    bodyStart();
    document.querySelector(".btn").style.border = "1px solid #8e9775";
    document.querySelector(".message").style.fontSize = "2.5em";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    timerReset();
  } //when high or low
  else if (guessNumber !== randomNuber) {
    if (score > 1) {
      if (guessNumber > randomNuber) {
        if (guessNumber <= b) {
          // when guessnumber "random + 5 > guess number > random"
          sendMessage("Too close, try lower numbers !");
        } else {
          sendMessage("Try lower numbers !");
        }
      } else {
        if (guessNumber >= a) {
          // when guess number "random - 5 < guess number < random"
          sendMessage("Too close, try higher numbers !");
        } else {
          sendMessage("Try higher numbers !");
        }
      }
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      sendMessage(`Correct number was ${guessNumber} !`);
    }
  }
});
// when click on "reset" button
document.querySelector(".reset").addEventListener("click", resetAll);
//when click on "reset highscore" button
document.querySelector(".high").addEventListener("click", function () {
  document.querySelector(".highscore").textContent = "0";
});

// let isRunning = true;
// function controlTime() {
//   if (isRunning) {
//     clearInterval(timer);
//     isRunning = false;
//   } else {
//     timer = setInterval(interVal, 1000);
//     isRunning = true;
//     interVal();
//   }
// }
function resetAll() {
  randomNuber = Math.trunc(Math.random() * 50 + 1);
  score = 10;
  document.querySelector(".score").textContent = score;
  sendMessage("Lets Start !");
  bodyReset();
  document.querySelector(".message").style.fontSize = "25px";
  document.querySelector(".guess").value = "";
  console.log(randomNuber);
  timerReset();
}
