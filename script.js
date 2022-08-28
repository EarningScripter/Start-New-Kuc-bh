let coin = document.getElementById("flip-coin");
let flip = document.getElementById("flip-again");
let toss = Math.floor(Math.random() * 4);
let tossResult = document.getElementById("result");

function flipAgain() {
    location.reload();
}

coin.addEventListener("click", function () {
    let result;

    if (toss == 1) {
        result = "";
        coin.src = "images/Dragon.jpg"
    } else {
        coin.src = "images/Tiger.jpg"
        result = "";
    }
    tossResult.innerHTML = ` ${result}`
    flip.innerHTML = `<button id="flip-again-btn">Start Again</button>`
    flip.addEventListener("click", flipAgain);
});
