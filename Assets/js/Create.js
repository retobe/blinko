var loadFile = function (event) {
    var blah = document.getElementById('blah');
    blah.src = URL.createObjectURL(event.target.files[0]);
    blah.onload = function () {
        URL.revokeObjectURL(blah.src) // free memory
    }
};

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const timeDelay = 2500;


window.onload = function () {
    var blah = document.getElementById('blah');
    const avatar = localStorage.getItem("avatar")
    const color = localStorage.getItem("color");
    const realName = localStorage.getItem("name");
    const username = localStorage.getItem("username");
    console.log(quote);
    const avatarInput = document.querySelector("#image")
    const colorInput = document.querySelector("#color");
    const realNameInput = document.querySelector("#name");
    const usernameInput = document.querySelector("#username");
    const quote = localStorage.getItem("quote");
    const quoteInput = document.querySelector("#quote");
    if (quote) {
        quoteInput.value = quote;
    }

    if (avatar) {
        blah.src = avatar
    }

    if (username) {
        usernameInput.value = username
    }
}


async function Submit() {
    const color = document.getElementById("color").value;
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const quote = document.getElementById("quote").value;
    const avatar = document.getElementById("image");
    let result = document.getElementById("title")
    avatar.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file.size > 10 * 1024 * 1024) {
            return result.innerHTML = "Image size is above 10 MBs!";
        }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            localStorage.setItem("avatar", reader.result);
            localStorage.setItem("avatarName", file.name);
            console.log(reader.result, file.name)
        };
    });

    const userAvatar = localStorage.getItem("avatar");

    var regex = /^[A-Za-z\s]*$/;
    var numbersNLetters = /^[a-zA-Z0-9]+$/;

    if (name) {
        if (!regex.test(name)) {
            return result.innerHTML = "Name must be only letters";
        }
        localStorage.setItem("name", name);
    }

    if (username) {
        if (!numbersNLetters.test(username)) {
            return result.innerHTML = "Username must be only letters/numbers";
        }
        localStorage.setItem("username", username);
    }

    if (color) {
        localStorage.setItem("color", color);
    }

    if (quote) {
        localStorage.setItem("quote", quote);
    }


    localStorage.setItem("profile", true);
    result.innerHTML = "Sucess!";
    const submit = document.querySelector("input[type='submit']");
    if (!submit) {
        return;
    }
    console.log("Clicked")
    submit.removeAttribute("onclick");
    result.innerHTML = "Loading back to homepage..."
    await delay(timeDelay);
    window.location.replace("../../Profile.html")
    await delay(1000);

}
