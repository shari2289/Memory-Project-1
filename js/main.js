/*----- constants -----*/
let cards;

/*----- app's state (variables) -----*/

/*----- cached element references -----*/
/*----- event listeners -----*
<div class="card">
        <div class="back-side">
          <img src="Neon-Pink-S.jpg" />
        </div>
        <div class="front-side face hidden"></div>
      </div>
/*----- functions -----*/
function start() {
  let cards = Array.from(document.getElementsByClassName("card"));

  cards.forEach((card) => {
    //console.log(card);
    card.addEventListener("click", () => {
      //flip cards
    });
  });
}
start();

let img = document.createElement("img");
let imgParent = document.getElementById("test");
img.src = "imgs/Neon-Pink-S.jpg";
console.log(imgParent);
imgParent.appendChild(img);
