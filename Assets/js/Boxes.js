let balance = parseInt(localStorage.getItem("balance"));
if (balance === null || balance === 0 || balance === "NaN" || !balance) {
  localStorage.setItem("balance", 10000);
  balance = localStorage.getItem("balance");
}
console.log(balance);

let correctBox;
const delay = (delayInms) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
};

// Function to select a random box as the correct box
function selectCorrectBox() {
  // Select a random number between 0 and 10
  let randomIndex = Math.floor(Math.random() * 9) + 1;
  // Select the box at the random index
  correctBox = document.getElementsByClassName("box")[randomIndex];
}
document.getElementById(
  "balance"
).innerHTML = `Balance: ${balance.toLocaleString()}`;

// Function to handle when a box is clicked
async function handleBoxClick(event) {
  if (!event.target.classList.contains("box")) return;
  if (balance < 5000) {
    return (document.getElementById("result").innerHTML =
      "Sorry, must have +5000 balance to play this gamemode.");
  }
  let clickedBox = event.target;

  // Check if the clicked box is the correct box
  if (clickedBox === correctBox) {
    clickedBox.innerHTML =
      "<img src='../images/correct.png' alt='Correct' style='width:100%; height:100%'/>";

    let randomNumber = Math.floor(Math.random() * 25000) + 10000;
    document.getElementById(
      "result"
    ).innerHTML = `Congratulations! You picked the correct box.<br>You won $${randomNumber.toLocaleString()}! `;
    // remove click event listener from all boxes
    let newBalance = randomNumber + balance;
    localStorage.setItem("balance", newBalance);
    document.getElementById(
      "balance"
    ).innerHTML = `Balance: ${balance.toLocaleString()}`;
    let boxes = document.getElementsByClassName("box");
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].removeEventListener("click", handleBoxClick);
    }
    //restart the game
    await delay(2000);
    document.getElementById("result").innerHTML = "Restarting Game...";
    setTimeout(restartGame, 3000);
  } else {
    let boxes = document.getElementsByClassName("box");
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].removeEventListener("click", handleBoxClick);
    }
    clickedBox.innerHTML =
      "<img src='../images/incorrect.png' alt='Incorrect' style='width:100%; height:100%'/>";

    document.getElementById("result").innerHTML =
      "Sorry, that was the wrong box. You lost 5000.";
    let newBalance = balance - 5000;
    document.getElementById(
      "balance"
    ).innerHTML = `Balance: ${balance.toLocaleString()}`;
    localStorage.setItem("balance", newBalance);
    await delay(2000);
    setTimeout(restartGame, 1000);
  }
  //flip the box
  clickedBox.classList.add("flipped");
}

// restart the game
function restartGame() {
  //remove the flipped class from the boxes
  let boxes = document.getElementsByClassName("box");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove("flipped");
    boxes[i].innerHTML = "";
    // add click event listener to all boxes
    boxes[i].addEventListener("click", handleBoxClick);
  }
  document.getElementById("result").innerHTML = "";
  selectCorrectBox();
}

// Add click event listener to all boxes
const boxes = document.getElementsByClassName("box");
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", handleBoxClick);
}

// Select a random box as the correct box
selectCorrectBox();
