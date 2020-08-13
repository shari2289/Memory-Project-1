/*----- constants -----*/
const cards = document.querySelectorAll(".card");

let flippedCard = false;
let firstCard, secondCard;

/*----- app's state (variables) -----*/

/*----- cached element references -----*/
/*----- event listeners -----*/
cards.forEach((card) => card.addEventListener("click", flipCard));
/*----- functions -----*/
function flipCard() {
  this.classList.add("flip");

  if (flippedCard) {
    flippedCard = true;
    firstCard = this;
  } else {
    flippedCard = false;
    secondCard = this;
  }
}
