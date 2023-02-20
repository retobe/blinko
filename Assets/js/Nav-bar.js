window.onload = function() {
    let balance = parseInt(localStorage.getItem("balance"));
    if (balance === null || balance === 0 || balance === "NaN" || !balance) {
        localStorage.setItem("balance", 10000);
        balance = localStorage.getItem("balance");
    }
    document.getElementById("balance").innerHTML = `Balance: ${balance.toLocaleString()}`
}