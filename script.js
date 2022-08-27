let coin = document.getElementById("flip-coin");
let flip = document.getElementById("flip-again");
let toss = Math.floor(Math.random() * 2);
let tossResult = document.getElementById("result");

function flipAgain() {
    location.reload();
}

coin.addEventListener("click", function () {
    let result;

    if (toss == 1) {
        result = "dragon";
        coin.src = "images/dragon.png"
    } else {
        coin.src = "images/tiger.png"
        result = "tiger";
    }
    tossResult.innerHTML = `It's ${result}.`
    flip.innerHTML = `<button id="flip-again-btn">Start Again</button>`
    flip.addEventListener("click", flipAgain);
});
