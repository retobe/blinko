let balance = parseInt(localStorage.getItem("balance"));
if (balance === null || balance === 0 || balance === "NaN" || !balance) {
  localStorage.setItem("balance", 10000);
  balance = localStorage.getItem("balance");
}

document.getElementById(
  "balance"
).innerHTML = `Balance: ${balance.toLocaleString()}`;

const selectBox = document.querySelector(".select-box"),
  selectBtnX = selectBox.querySelector(".options .playerX"),
  selectBtnO = selectBox.querySelector(".options .playerO"),
  playBoard = document.querySelector(".play-board"),
  players = document.querySelector(".players"),
  allBox = document.querySelectorAll("section span"),
  resultBox = document.querySelector(".result-box"),
  wonText = resultBox.querySelector(".won-text"),
  replayBtn = resultBox.querySelector("button");

let actualPlayerSign;

window.onload = () => {
  // make sure all the boxes in the board are clickable
  for (let i = 0; i < allBox.length; i++) {
    allBox[i].setAttribute("onclick", "clickedBox(this)");
  }
};

selectBtnX.onclick = () => {
  selectBox.classList.add("hide");
  playBoard.classList.add("show");
};

selectBtnO.onclick = () => {
  selectBox.classList.add("hide");
  playBoard.classList.add("show");
  players.setAttribute("class", "players active player");
};

let playerXIcon = "fas fa-times",
  playerOIcon = "far fa-circle",
  playerSign = "X",
  runBot = true;

// user interaction with the board
function clickedBox(element) {
  // console.log("Clicked")
  if (players.classList.contains("player")) {
    playerSign = "O";
    element.innerHTML = `<i class="${playerOIcon}"></i>`;
    players.classList.remove("active");
    element.setAttribute("id", playerSign);
  } else {
    element.innerHTML = `<i class="${playerXIcon}"></i>`;
    element.setAttribute("id", playerSign);
    players.classList.add("active");
  }
  selectWinner();
  element.style.pointerEvents = "none";
  playBoard.style.pointerEvents = "none";

  // buffer time to pretend that the AI's thinking
  let randomTimeDelay = (Math.random() * 1000 + 200).toFixed();
  setTimeout(() => {
    bot(runBot);
  }, randomTimeDelay);
  console.log(playBoard);
}

// computer interaction with the board
function bot() {
  let array = [];
  if (runBot) {
    playerSign = "O";
    // find the remaining boxes that has not been marked
    for (let i = 0; i < allBox.length; i++) {
      if (allBox[i].childElementCount == 0) {
        array.push(i);
      }
    }
    // get random box from remaining tiles
    let randomBox = array[Math.floor(Math.random() * array.length)];
    if (array.length > 0) {
      if (players.classList.contains("player")) {
        playerSign = "X";
         actualPlayerSign = "X"
        allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
        allBox[randomBox].setAttribute("id", playerSign);
        players.classList.add("active");
      } else {
        allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
         actualPlayerSign = "O"
        players.classList.remove("active");
        allBox[randomBox].setAttribute("id", playerSign);
      }
      selectWinner();
    }
    allBox[randomBox].style.pointerEvents = "none";
    playBoard.style.pointerEvents = "auto";
    playerSign = "X";
  }
}
// get the sign of a certain box
function getIdVal(classname) {
  return document.querySelector(".box" + classname).id;
}
// check 3 tiles to see if they are the same
function checkIdSign(val1, val2, val3, sign) {
  if (
    getIdVal(val1) == sign &&
    getIdVal(val2) == sign &&
    getIdVal(val3) == sign
  ) {
    return true;
  }
  return false;
}
// check winner
function selectWinner() {
  if (
    checkIdSign(1, 2, 3, playerSign) ||
    checkIdSign(4, 5, 6, playerSign) ||
    checkIdSign(7, 8, 9, playerSign) ||
    checkIdSign(1, 4, 7, playerSign) ||
    checkIdSign(2, 5, 8, playerSign) ||
    checkIdSign(3, 6, 9, playerSign) ||
    checkIdSign(1, 5, 9, playerSign) ||
    checkIdSign(3, 5, 7, playerSign)
  ) {
    runBot = false;
    bot(runBot);

    // buffer time
    setTimeout(() => {
      resultBox.classList.add("show");
      playBoard.classList.remove("show");
    }, 700);
    const random = Math.floor(Math.random() * 5000) + 1000;
    if (actualPlayerSign != playerSign) {
      wonText.innerHTML = `You won the game!<br>You've earned ${random.toLocaleString()}!`
      balance += random
      localStorage.setItem("balance", balance)
    } else {
      wonText.innerHTML = `You lost the game.<br>You've lost -10,000!`
      balance -= 10000
      localStorage.setItem("balance", balance)
    }
    document.getElementById(
      "balance"
    ).innerHTML = `Balance: ${balance.toLocaleString()}`;
    console.log(actualPlayerSign, playerSign)
  } else {
    // if the board is full
    if (
      getIdVal(1) != "" &&
      getIdVal(2) != "" &&
      getIdVal(3) != "" &&
      getIdVal(4) != "" &&
      getIdVal(5) != "" &&
      getIdVal(6) != "" &&
      getIdVal(7) != "" &&
      getIdVal(8) != "" &&
      getIdVal(9) != ""
    ) {
      runBot = false;
      bot(runBot);

      // buffer time for showing the match has been drawn
      setTimeout(() => {
        resultBox.classList.add("show");
        playBoard.classList.remove("show");
      }, 700);
      wonText.textContent = "Match has been drawn!\nNothing earned.";
    }
  }
}

// reload page when replay button is clicked
replayBtn.onclick = () => {
  window.location.reload();
};
