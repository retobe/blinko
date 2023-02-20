let balance = parseInt(localStorage.getItem("balance"));
if (balance === null || balance === 0 || balance === "NaN" || !balance) {
  localStorage.setItem("balance", 10000);
  balance = localStorage.getItem("balance");
}

let cards = document.querySelectorAll(".card");
let container = document.querySelector(".container");
let selectedCard = null;
let message = document.getElementById("results");
let gameOver = false;

document.getElementById(
  "balance"
).innerHTML = `Balance: ${balance.toLocaleString()}`;

async function shuffleCards() {
  cards = Array.from(cards);
  for (let i = cards.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 2));
    container.appendChild(cards[randomIndex]);
  }

  cards.forEach((card) => {
    card.classList.add("fade-in");
    card.addEventListener("click", function () {
      if (!gameOver) {
        if (selectedCard === null) {
          selectedCard = card;
          cards.forEach((c) => {
            c.querySelector("img").classList.toggle("hide");
            c.classList.toggle("flip");
          });
          shuffleCards();
        } else {
          if (selectedCard === card) {
            const rdm = Math.floor(Math.random() * 9500) + 500;
            message.innerHTML = `You got it right!<br>You earned ${rdm.toLocaleString()}.`;
            message.style.color = "green";
            gameOver = true;
            balance += rdm;
            localStorage.setItem("balance", balance);
          } else {
            message.innerHTML =
              "Sorry but you lost, -5000<br>Click restart to try again";
            message.style.color = "red";
            gameOver = true;
            balance -= 5000;
            localStorage.setItem("balance", balance);
          }
          document.getElementById(
            "balance"
          ).innerHTML = `Balance: ${balance.toLocaleString()}`;
          cards.forEach((c) => {
            c.querySelector("img").classList.toggle("unhide");
          });
        }
      }
    });
  });
}

shuffleCards();

async function reloadgame() {
  message.innerHTML = "Refreshing Game.";
  setInterval(window.location.reload(), 2500);
}
