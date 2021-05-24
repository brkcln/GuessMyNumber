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
let colorMainBack = function (color) {
  document.querySelector("body").style.backgroundColor = color;
}
let colorMain = function (color) {
  document.querySelector("body").style.color = "#ffe3fe";
}
let bodyStart = function () {
  document.querySelector(".timerLeft").style.visibility = "hidden";
  document.querySelector(".message").style.fontSize = "2.5em";
  sendMessage("Yeeeey ! You got it..");
  colorMainBack("#b4aee8");
  colorMain("#ffe3fe");
  document.querySelector("h1").style.color = "#ffe3fe";
  document.querySelector(".guess").style.backgroundColor = "#b4aee8";
  document.querySelector(".guess").style.color = "#ffe3fe";
};
let bodyReset = function () {
  colorMainBack("#ffe3fe");
  colorMain("#b4aee8");
  document.querySelector(".guess").style.backgroundColor = "#ffe3fe"; 
  document.querySelector(".guess").style.color = "#b4aee8";
  document.querySelector("h1").style.color = "#b4aee8";
  document.querySelector(".score_section").style.color = "#b4aee8";
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
    bodyStart();
    btnColorChang();
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
        sendMessage("So close ! try lower one !");
      } else if (guessNumber > randomNuber) {
        sendMessage("Try lower one !");
      } else if (a < guessNumber && guessNumber < randomNuber) {
        // when guess number "random - 5 < guess number < random"
        sendMessage("So close ! Try higher one !");
      } else if (guessNumber < randomNuber) {
        sendMessage("Try higher one !");
      }
      score--;
      document.querySelector(".score").textContent = score;
      if (score === 9) {
        let timeLeft = 30;
        timer = setInterval(interVal, 1000);
        function interVal() {
          if (timeLeft <= 0) {
            clearInterval(timer);
            sendMessage(`Time is up..! Correct number was ${randomNuber} ! `);
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
      document.querySelector(".timerLeft").style.visibility = "hidden";
      clearInterval(timer);
    }
  }
});
// when click on "reset" button
document.querySelector(".reset").addEventListener("click", resetAll);
//when click on "reset highscore" button
document.querySelector(".high").addEventListener("click", function () {
  document.querySelector(".highscore").textContent = "0";
});
function btnColorChang() {
  let btneColor = document.querySelectorAll(".btne");
  var i;
  for (i = 0; i < btneColor.length; i++) {
    btneColor[i].style.backgroundColor = "#ffe3fe";
  }
}

function resetAll() {
  randomNuber = Math.trunc(Math.random() * 50 + 1);
  a = Number(randomNuber - 5);
  b = Number(randomNuber + 5);
  score = 10;
  document.querySelector(".score").textContent = score;
  sendMessage("Enter a number to start the game..");
  document.querySelector(".message").style.fontSize = "23px";
  document.querySelector(".guess").value = "";
  document.querySelector(".guess").focus();
  document.querySelector(".timerLeft").style.visibility = "hidden";
  bodyReset();
  let btneColor = document.querySelectorAll(".btne");
  var i;
  for (i = 0; i < btneColor.length; i++) {
    btneColor[i].style.backgroundColor = "#b4aee8";
  }
  clearInterval(timer);
}
