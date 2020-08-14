const cards = document.querySelectorAll(".card");
const timer = document.getElementById("time-left");

let matchedCards = [];
let firstCard, secondCard;
let flippedCard = false;

cards.forEach((card) => card.addEventListener("click", flipCard));

function flipCard() {
  this.classList.add("flip");

  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
  } else {
    flippedCard = false;
    secondCard = this;

    if (firstCard.dataset.style === secondCard.dataset.style) {
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);
    } else {
      setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
      }, 1000);
    }
  }
}
