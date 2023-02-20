let balance = parseInt(localStorage.getItem("balance"));
if (balance === null || balance === 0 || balance === "NaN" || !balance) {
  localStorage.setItem("balance", 10000);
  balance = localStorage.getItem("balance");
}
console.log(balance);

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const timeDelay = 2500;

document.getElementById(
  "balance"
).innerHTML = `Balance: ${balance.toLocaleString()}`;

async function rollDices() {
  if (balance < 15000) {
    return (document.getElementById(
      "results"
    ).innerHTML = `Sorry! You must have at least 15,000 balance to play this gamemode >:(`);
  }
  const dice1 = Math.floor(Math.random() * 5) + 1;
  const dice2 = Math.floor(Math.random() * 5) + 1;
  const userDice1 = parseInt(document.getElementById("dice1").value);
  const userDice2 = parseInt(document.getElementById("dice2").value);

  if (userDice1 > 6 || userDice1 < 1) {
    return (document.getElementById("results").innerHTML = `Invalid Guesses!`);
  }

  if (userDice2 > 6 || userDice2 < 1) {
    return (document.getElementById("results").innerHTML = `Invalid Guesses!`);
  }

  const jackPot = Math.floor(Math.random() * 25000) + 10000;
  const regularMoney = Math.floor(Math.random() * 10000) + 5000;
  const lostMoney = Math.floor(Math.random() * 10000) + 5000;

  if (dice1 === userDice1 && dice2 === userDice2) {
    document.getElementById("results").style.color = "yellow";
    document.getElementById(
      "results"
    ).innerHTML = `JACKPOT! You got both guesses right! You earned <b>CRAZY</b> money, <b>${jackPot.toLocaleString()}</b>!`;
    let newBalance = jackPot + balance;
    localStorage.setItem("balance", newBalance);
  } else if (dice1 === userDice1 || dice2 === userDice2) {
    document.getElementById("results").style.color = "green";
    document.getElementById(
      "results"
    ).innerHTML = `You got one guess right! You earned <b>${regularMoney.toLocaleString()}</b>!`;
    let newBalance = regularMoney + balance;
    localStorage.setItem("balance", newBalance);
  } else {
    document.getElementById(
      "results"
    ).innerHTML = `Unlucky, you got none of them right. You lost <b>${lostMoney.toLocaleString()}</b>.`;
    let newBalance = balance - regularMoney;
    localStorage.setItem("balance", newBalance);
  }
  balance = localStorage.getItem("balance");
  document.getElementById("submit").remove();
  document.getElementById("outcome1").innerHTML = `${dice1}`;
  document.getElementById("outcome2").innerHTML = `${dice2}`;
  await delay(500);
  document.getElementById(
    "balance"
  ).innerHTML = `Balance: ${balance.toLocaleString()}`;
  await delay(2000);
  document.getElementById("results").innerHTML = "Starting new game...";
  await delay(1500);
  window.location.reload();
}
