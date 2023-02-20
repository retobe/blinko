window.onload = function () {
    let result = document.getElementById("result");
    let balance = parseInt(localStorage.getItem("balance"));
    if (balance === null || balance === 0 || balance === "NaN" || !balance) {
        localStorage.setItem("balance", 10000);
        balance = localStorage.getItem("balance");
    }
    document.getElementById("balance").innerHTML = `Balance: ${balance.toLocaleString()}`
    const collectMoneyButton = document.querySelector("#collect-money-daily");
    const collectMoneyButtonWeekly = document.querySelector("#collect-money-weekly");

    collectMoneyButton.addEventListener("click", function () {
        // Get the current date and time
        const currentTime = new Date().getTime();

        // Get the last collection time from local storage, or set it to 0 if it doesn't exist
        const lastCollectionTime = localStorage.getItem("lastCollectionTimeDaily") || 0;

        // Calculate the time elapsed since the last collection time
        const timeElapsed = currentTime - lastCollectionTime;

        // Check if the cooldown period has elapsed (24 hours = 86400000 milliseconds)
        if (timeElapsed >= 86400000) {
            // Add daily money to the balance (you can set the amount to whatever you want)
            const dailyMoney = 25000;
            const currentBalance = Number(localStorage.getItem("balance") || 0);
            const newBalance = currentBalance + dailyMoney;

            // Update the balance in local storage
            localStorage.setItem("balance", newBalance);
            // Update the last collection time in local storage
            localStorage.setItem("lastCollectionTimeDaily", currentTime);

            // Display a message to the user
            result.innerHTML = (`You collected ${dailyMoney} coins! Your new balance is ${newBalance}.`);
        } else {
            // Display an error message to the user
            const remainingTime = Math.floor((86400000 - timeElapsed) / 1000 / 60 / 60);
            result.innerHTML = (`You can collect your daily money in ${remainingTime} hours.`);
        }
    });

    collectMoneyButtonWeekly.addEventListener("click", function () {
        const currentTime = new Date().getTime();

        // Get the last collection time from local storage, or set it to 0 if it doesn't exist
        const lastCollectionTime = localStorage.getItem("lastCollectionTimeWeekly") || 0;

        // Calculate the time elapsed since the last collection time
        const timeElapsed = currentTime - lastCollectionTime;

        // Check if the cooldown period has elapsed (1 week = 604800000 milliseconds)
        if (timeElapsed >= 604800000) {
            // Add weekly money to the balance (you can set the amount to whatever you want)
            const weeklyMoney = 150000;
            const currentBalance = Number(localStorage.getItem("balance") || 0);
            const newBalance = currentBalance + weeklyMoney;

            // Update the balance in local storage
            localStorage.setItem("balance", newBalance);
            // Update the last collection time in local storage
            localStorage.setItem("lastCollectionTimeWeekly", currentTime);

            // Display a message to the user
            result.innerHTML = (`You collected ${weeklyMoney} coins! Your new balance is ${newBalance}.`);
        } else {
            // Display an error message to the user
            const remainingTime = Math.floor((604800000 - timeElapsed) / 1000 / 60 / 60 / 24);
            result.innerHTML = (`You can collect your weekly money in ${remainingTime} days.`);
        }
    });


}