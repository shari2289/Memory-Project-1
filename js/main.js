const cards = document.querySelectorAll(".card");
const timer = document.getElementById("time-left");

let lockGrid = false;
let firstCard, secondCard;
let flippedCard = false;

cards.forEach((card) => card.addEventListener("click", flipCard));

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

  isAMatch ? lockCard() : unflipCard();
}

function lockCard() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  refreshGame();
}

function unflipCard() {
  lockGrid = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    refreshGame();
  }, 900);
}

function refreshGame() {
  [flippedCard, lockGrid] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();
