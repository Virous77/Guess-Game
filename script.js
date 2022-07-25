"use strict";

let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".play").addEventListener("click", () => {
  const guessNumber = Number(document.querySelector(".guess-number").value);

  //when there is no input
  if (guessNumber === 0) {
    document.querySelector(".message").textContent = "Enter Your Number...";

    // When player wins
  } else if (guessNumber === randomNumber) {
    document.querySelector(".message").textContent = "You Won!!";
    document.querySelector(".win-number").textContent = randomNumber;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".win-number").style.width = "10rem";
    document.querySelector(".message").style.fontSize = "2rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".active-highscore").textContent = highscore;
    }

    // When player input big number
  } else if (guessNumber > randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High!";
      score--;
      document.querySelector(".active-score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lose!!!!";
      document.querySelector(".active-score").textContent = 0;
    }

    //when player input low number
  } else if (guessNumber < randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!";
      score--;
      document.querySelector(".active-score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lose!!!!";
      document.querySelector(".active-score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "It's your turn!";
  document.querySelector(".message").style.fontSize = "1.4rem";
  document.querySelector(".active-score").textContent = score;
  document.querySelector(".win-number").textContent = "?";
  document.querySelector(".guess-number").value = "";
  document.querySelector(".win-number").style.width = "7rem";
  document.querySelector("body").style.backgroundColor = "white";
});
