let balance = parseInt(localStorage.getItem("balance"));
if (balance === null || balance === 0 || balance === "NaN" || !balance) {
  localStorage.setItem("balance",10000);
  balance = localStorage.getItem("balance");
}
console.log(balance)


const delay = ms => new Promise(res => setTimeout(res, ms));
const timeDelay = 2500;

var hintNumber = Math.floor(Math.random() * 99) + 1
var actualNumber = Math.floor(Math.random() * 99) + 1

document.getElementById("number").innerHTML = `Your hint is <b>${hintNumber}</b> <br>You can choose if you think the hint number is the same (jackpot), lower, or higher then the actual number.`
document.getElementById("balance").innerHTML = `Balance: ${balance.toLocaleString()}`

async function lower() {
  var userstatus = "";
  if (hintNumber < actualNumber) {
    userstatus = "lost";
  } else {
    userstatus = "won";
  }
  console.log(userstatus)
  if (userstatus === "lost") {
    document.getElementById("number").style.color = "red"
    document.getElementById("number").innerHTML = `You lost :(<br>The number ${actualNumber} is higher than ${hintNumber} not lower!`
  } else {
    var randomWon = Math.floor(Math.random() * 4000) + 1000;
    balance += randomWon
    localStorage.setItem("balance", balance);
    document.getElementById("number").style.color = "green"
    document.getElementById("number").innerHTML = `You guessed it right<br>The number was <b>${actualNumber}</b><br>You won $${randomWon.toLocaleString()} from that!<br>New balance: ${balance.toLocaleString()}`
  }
  document.getElementById("lower").removeAttribute("onclick");
  document.getElementById("jackpot").removeAttribute("onclick");
  document.getElementById("higher").removeAttribute("onclick");
  document.getElementById(
    "balance"
  ).innerHTML = `Balance: ${balance.toLocaleString()}`;
  await delay(timeDelay)
  newGame()
}

async function jackpot() {
  var userstatus = "";
  if (hintNumber != actualNumber) {
    userstatus = "lost";
  } else {
    userstatus = "won";
  }
  if (userstatus === "lost") {
    document.getElementById("number").style.color = "red"
    document.getElementById("number").innerHTML = `You lost :(<br>The number ${actualNumber} is not the same as ${hintNumber}!`
  } else {
    var randomWon = Math.floor(Math.random() * 10000) + 10000;
    balance += randomWon
    localStorage.setItem("balance", balance);
    document.getElementById("number").style.color = "yellow"
    document.getElementById("number").innerHTML = `JACKPOT!!<br>The number was <b>${actualNumber}</b><br>You won $${randomWon.toLocaleString()} from that!<br>New balance: ${balance.toLocaleString()}`
    document.getElementById(
      "balance"
    ).innerHTML = `Balance: ${balance.toLocaleString()}`;
  }
  document.getElementById("lower").removeAttribute("onclick");
  document.getElementById("jackpot").removeAttribute("onclick");
  document.getElementById("higher").removeAttribute("onclick");
  await delay(timeDelay);
  newGame()
}

async function higher() {
  var userstatus = "";
  if (hintNumber > actualNumber) {
    userstatus = "lost";
  } else {
    userstatus = "won";
  }
  if (userstatus === "lost") {
    document.getElementById("number").style.color = "red"
    document.getElementById("number").innerHTML = `You lost :(<br>The number ${actualNumber} is lower than ${hintNumber} not higher!`
  } else {
    var randomWon = Math.floor(Math.random() * 4000) + 1000;
    balance += randomWon
    localStorage.setItem("balance", balance);
    document.getElementById("number").style.color = "green"
    document.getElementById("number").innerHTML = `You guessed it right<br>The number was <b>${actualNumber}</b><br>You won $${randomWon.toLocaleString()} from that!<br>New balance: ${balance.toLocaleString()}`
  }
  document.getElementById("lower").removeAttribute("onclick");
  document.getElementById("jackpot").removeAttribute("onclick");
  document.getElementById("higher").removeAttribute("onclick");
  document.getElementById(
    "balance"
  ).innerHTML = `Balance: ${balance.toLocaleString()}`;
  await delay(timeDelay);
  newGame()
}

async function newGame() {
    document.getElementById("number").innerHTML = "Starting new game..."
    await delay(1000);
    window.location.reload();
}