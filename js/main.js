const cards = document.querySelectorAll(".card");
const timer = document.getElementById("time-left");

let lockGrid = false;
let firstCard, secondCard;
let flippedCard = false;

cards.forEach((card) => card.addEventListener("click", flipCard));

function flipCard() {
  if (lockGrid) return;

  this.classList.add("flip");

  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
  } else {
    flippedCard = false;
    secondCard = this;

    checkIfMatched();
  }

  function checkIfMatched() {
    if (firstCard.dataset.style === secondCard.dataset.style) {
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);
    } else {
      lockGrid = true;
      setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        lockGrid = false;
      }, 900);
    }
  }
}
