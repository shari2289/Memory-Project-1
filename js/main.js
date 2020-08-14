const cards = document.querySelectorAll(".card");

let lockGrid = false;
let firstCard, secondCard;
let flippedCard = false;
let timeLeft = 90;
let matchingCards = [];

cards.forEach((card) => card.addEventListener("click", flipCard));

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 1 ? "0" + minutes : minutes;
    seconds = seconds < 0 ? "30" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  var gameTime = 90 * 1,
    display = document.querySelector("#time-left");
  startTimer(gameTime, display);
  if ("#time-left" === 0);
  gameOver();
};

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
  if (timeLeft === 0) display = document.querySelector("#game-over");
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
