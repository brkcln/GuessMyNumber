"use strict";
let score = 10;
let highScore = 0;
let randomNuber = Math.trunc(Math.random() * 50 + 1);
let a = Number(randomNuber - 5);
let b = Number(randomNuber + 5);
let timer;

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
    clearInterval(timer);
  } //when high or low
  else if (guessNumber !== randomNuber) {
    if (score > 1) {
      if (randomNuber < guessNumber && guessNumber < b) {
        // when guessnumber "random + 5 > guess number > random"
        sendMessage("Too close, try lower numbers !");
      } else if (guessNumber > randomNuber) {
        sendMessage("Try lower numbers !");
      } else if (a < guessNumber && guessNumber < randomNuber) {
        // when guess number "random - 5 < guess number < random"
        sendMessage("Too close, try higher numbers !");
      } else if (guessNumber < randomNuber) {
        sendMessage("Try higher numbers !");
      }
      score--;
      document.querySelector(".score").textContent = score;
      if (score === 9) {
        let timeLeft = 30;
        timer = setInterval(interVal, 1000);
        function interVal() {
          if (timeLeft <= 0) {
            clearInterval(timer);
            sendMessage("Time is up..! Correct number was ${randomNuber} ! ");
            document.querySelector(".timerLeft").style.visibility = "hidden";
          } else {
            document.querySelector(".timerLeft").style.visibility = "visible";
            document.querySelector(".timerLeft").textContent =
              timeLeft + " seconds remaining";
          }
          timeLeft -= 1;
        }
      }
    } else {
      document.querySelector(".score").textContent = 0;
      sendMessage(`Correct number was ${randomNuber} !`);
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
  a = Number(randomNuber - 5);
  b = Number(randomNuber + 5);
  score = 10;
  document.querySelector(".score").textContent = score;
  sendMessage("Lets Start !");
  bodyReset();
  document.querySelector(".message").style.fontSize = "25px";
  document.querySelector(".guess").value = "";
  document.querySelector(".guess").focus();
}
