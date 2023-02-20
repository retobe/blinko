let balance = parseInt(localStorage.getItem("balance"));
if (balance === null || balance === 0 || balance === "NaN" || !balance) {
    localStorage.setItem("balance", 10000);
    balance = localStorage.getItem("balance");
}

let text = document.querySelector("#text")

if (
    localStorage.getItem("1") == null ||
    localStorage.getItem("2") == null ||
    localStorage.getItem("3") == null ||
    localStorage.getItem("4") == null ||
    localStorage.getItem("5") == null ||
    localStorage.getItem("6") == null ||
    localStorage.getItem("7") == null
) {
    localStorage.setItem("1", 0)
    localStorage.setItem("2", 0)
    localStorage.setItem("3", 0)
    localStorage.setItem("4", 0)
    localStorage.setItem("5", 0)
    localStorage.setItem("6", 0)
    localStorage.setItem("7", 0)
}

let diamonds = parseInt(localStorage.getItem("1"))
let ruby = parseInt(localStorage.getItem("2"))
let sapphire = parseInt(localStorage.getItem("3"))
let emerald = parseInt(localStorage.getItem("4"))
let gold = parseInt(localStorage.getItem("5"))
let amethyst = parseInt(localStorage.getItem("6"))
let sliver = parseInt(localStorage.getItem("7"))



console.log(balance);

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const timeDelay = 2500;

document.getElementById(
    "balance"
).innerHTML = `Balance: ${balance.toLocaleString()}`;

async function purchase(id) {
    switch (id) {
        case "1":
            if (balance >= 1000000) {
                balance -= 1000000
                diamonds += 1
                localStorage.setItem("1", diamonds)
                localStorage.setItem("balance", balance)
                text.innerHTML = "Success"
                text.style.color = "green"
                text.classList.add("unhide");
            } else {
                text.innerHTML = "Insufficent Funds"
                text.style.color = "red"
                text.classList.add("unhide");
            }
            break;
        case "2":
            if (balance >= 750000) {
                balance -= 750000
                ruby += 1
                localStorage.setItem("2", ruby)
                localStorage.setItem("balance", balance)
                text.innerHTML = "Success"
                text.style.color = "green"
                text.classList.add("unhide");
            } else {
                text.innerHTML = "Insufficent Funds"
                text.style.color = "red"
                text.classList.add("unhide");
            }
            break;
        case "3":
            if (balance >= 500000) {
                balance -= 500000
                sapphire += 1
                localStorage.setItem("3", sapphire)
                localStorage.setItem("balance", balance)
                text.innerHTML = "Success"
                text.style.color = "green"
                text.classList.add("unhide");
            } else {
                text.innerHTML = "Insufficent Funds"
                text.style.color = "red"
                text.classList.add("unhide");
            }
            break;
        case "4":
            if (balance >= 250000) {
                balance -= 250000
                emerald += 1
                localStorage.setItem("4", emerald)
                localStorage.setItem("balance", balance)
                text.innerHTML = "Success"
                text.style.color = "green"
                text.classList.add("unhide");
            } else {
                text.innerHTML = "Insufficent Funds"
                text.style.color = "red"
                text.classList.add("unhide");
            }
            break;
        case "5":
            if (balance >= 100000) {
                balance -= 100000
                gold += 1
                localStorage.setItem("5", gold)
                localStorage.setItem("balance", balance)
                text.innerHTML = "Success"
                text.style.color = "green"
                text.classList.add("unhide");
            } else {
                text.innerHTML = "Insufficent Funds"
                text.style.color = "red"
                text.classList.add("unhide");
            }
            break;
        case "6":
            if (balance >= 75000) {
                balance -= 75000
                amethyst += 1
                localStorage.setItem("6", amethyst)
                localStorage.setItem("balance", balance)
                text.innerHTML = "Success"
                text.style.color = "green"
                text.classList.add("unhide");
            } else {
                text.innerHTML = "Insufficent Funds"
                text.style.color = "red"
                text.classList.add("unhide");
            }
            break;
        case "7":
            if (balance >= 20000) {
                balance -= 20000
                sliver += 1
                localStorage.setItem("7", sliver)
                localStorage.setItem("balance", balance)
                text.innerHTML = "Success"
                text.style.color = "green"
                text.classList.add("unhide");
            } else {
                text.innerHTML = "Insufficent Funds"
                text.style.color = "red"
                text.classList.add("unhide");
            }
            break;
        default:
            text.innerHTML = "Error"
            text.style.color = "red"
            text.classList.add("unhide");
            break;
    }
    document.getElementById(
        "balance"
    ).innerHTML = `Balance: ${balance.toLocaleString()}`;

}