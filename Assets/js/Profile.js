let balance = parseInt(localStorage.getItem("balance"));
if (balance === null || balance === 0 || balance === "NaN" || !balance) {
    localStorage.setItem("balance", 10000);
    balance = localStorage.getItem("balance");
}

let profile = localStorage.getItem("profile");

if (!profile || profile === null || profile === 0 || profile === "NaN") {
    localStorage.setItem("profile", false);
}

console.log(profile)

if (profile === "false") {
    window.location.replace("../../createProfile.html")
}

document.getElementById(
    "balance"
).innerHTML = `Balance: ${balance.toLocaleString()}`;

async function writeProfile() {
    let diamonds = parseInt(localStorage.getItem("1"));
    let ruby = parseInt(localStorage.getItem("2"));
    let sapphire = parseInt(localStorage.getItem("3"));
    let emerald = parseInt(localStorage.getItem("4"));
    let gold = parseInt(localStorage.getItem("5"));
    let amethyst = parseInt(localStorage.getItem("6"));
    let sliver = parseInt(localStorage.getItem("7"));

    console.log(`Amount:`, diamonds, ruby, sapphire, emerald, gold, amethyst, sliver)

    let networth = 0;

    for (let i = 1; i <= 7; i++) {
        switch (i) {
            case 1:
                networth += diamonds * 1000000
                break;
            case 2:
                networth += ruby * 750000
                break;
            case 3:
                networth += sapphire * 500000
                break;
            case 4:
                networth += emerald * 250000
                break;
            case 5:
                networth += gold * 100000
                break;
            case 6:
                networth += amethyst * 75000
                break;
            case 7:
                networth += sliver * 20000
                break;
            default:
                console.log("L")
                break;
        }
    }


    const avatar = localStorage.getItem("avatar")
    const color = localStorage.getItem("color");
    const realName = localStorage.getItem("name");
    const username = localStorage.getItem("username");
    const quote = localStorage.getItem("quote");

    document.getElementById("networth").innerHTML = `Networth: ${networth.toLocaleString()}`
    document.getElementById("avatar").src = avatar;
    document.getElementById("name").innerHTML = realName;
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("username").innerHTML = `@${username}`;
    document.getElementById("container").style.backgroundColor = `${color}`

    console.log(color)

    document.getElementById("1").innerHTML = diamonds
    document.getElementById("2").innerHTML = ruby
    document.getElementById("3").innerHTML = sapphire
    document.getElementById("4").innerHTML = emerald
    document.getElementById("5").innerHTML = gold
    document.getElementById("6").innerHTML = amethyst
    document.getElementById("7").innerHTML = sliver

}

if (!profile) {
    window.location.replace("../../createProfile.html")
} else {
    writeProfile()
}