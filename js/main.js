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
  refreshGame();
}

function notAMatch() {
  lockGrid = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    refreshGame();
  }, 1000);
}

function refreshGame() {
  [flippedCard, lockGrid] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function gameOver() {
  if (seconds === 0) display = document.querySelector("#game-over");
}

function gameWinner() {
  if (matchingCards.length !== 12) display = document.querySelector("winner");
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();
