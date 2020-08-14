const cards = document.querySelectorAll(".card");

let flippedCard = false;
let firstCard, secondCard;

cards.forEach((card) => card.addEventListener("click", flipCard));

function flipCard() {
  this.classList.add("flip");

  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;

    console.log(flippedCard, firstCard);
  }
}
