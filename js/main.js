const cards = document.querySelectorAll(".card");

let lockGrid = false;
let firstCard, secondCard;
let flippedCard = false;
let timeLeft = 50;
let matchingCards = [];

cards.forEach((card) => card.addEventListener("click", flipCard));

var seconds = document.getElementById("time-left").textContent;
var countdown = setInterval(function () {
  seconds--;
  document.getElementById("time-left").textContent = seconds;
  if (seconds <= 0) clearInterval(countdown);
}, 1000);

function flipCard() {
  if (lockGrid) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkIfMatched();
}

function checkIfMatched() {
  let isAMatch = firstCard.dataset.style === secondCard.dataset.style;

  isAMatch ? itsAMatch() : notAMatch();
}

function itsAMatch() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  matchingCards.push(firstCard, secondCard);
  wonGame();
  refreshGame();
}

function notAMatch() {
  lockGrid = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    refreshGame();
  }, 1300);
}

function refreshGame() {
  [flippedCard, lockGrid] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function wonGame() {
  if (matchingCards.length == 12 && seconds > 0) {
    clearInterval(countdown);
    document.getElementById("winner").style.display = "block";
  }
}

function gameOver() {
  if (matchingCards.length !== 12 && seconds < 1) {
    document.getElementById("game-over").style.display = "block";
  }
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();
