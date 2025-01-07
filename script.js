alert("Enter any key to know its details")
let card = document.querySelector(".container");

card.onmousemove = function (e) {
    let x = e.pageX - card.offsetLeft;
    let y = e.pageY - card.offsetTop;
    card.style.setProperty("--x", x + "px");
    card.style.setProperty("--y", y + "px");
};

window.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        document.querySelector(".keyContainer").innerText = "spaceBar";
    } else if (e.code === "Enter") {
        document.querySelector(".keyContainer").innerText = "enter";
    } else if (e.code === "Escape") {
        document.querySelector(".keyContainer").innerText = "escape";
    } else {
        document.querySelector(".keyContainer").innerText = e.key;
    }
    document.querySelector(".codeContainer").innerText = e.code;
    if (!e.keycode) {
        document.querySelector(".keyCode").innerText = e.key.charCodeAt(0);
    } else {
        document.querySelector(".keyCode").innerText = e.keyCode;
    }
    document.querySelector(".keyLoc").innerText = e.location;
});

