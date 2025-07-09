let randomNumber = Math.floor(Math.random() * 10 + 1);
const userInput = document.querySelector(".guessField");
const submitButton = document.querySelector(".guessSubmit");

const lastResult = document.querySelector(".lastResult");
const lowOrhight = document.querySelector(".lowOrhight")
let guessCount = 1;
let resetButton;
let guessHistory = [];

function checkGuess() {
    if (userInput.value === "") {
        document.querySelector("form").addEventListener("submit", function (e) { e.preventDefault(); });
        }
    const userGuess = Number(userInput.value);
    if (userGuess === randomNumber) {
        lowOrhight.textContent = "Congratulations! You got it right!";
        gameOver();
        return;
    }
     else if(guessCount === 5) {
        lowOrhight.textContent = "!!!GAME OVER!!!";
        gameOver();
        return;
    }
    
    if (userGuess > randomNumber) {
        lowOrhight.textContent = "Last guess is too high";
    } else if (userGuess < randomNumber) {
        lowOrhight.textContent = "Last guess is too low";
    }

    guessHistory.push(userInput.value);
    lastResult.textContent = "History:"+guessHistory.join(",");
    guessCount++;
    userInput.value = "";
}

submitButton.addEventListener("click", checkGuess);
document.removeEventListener("keydown", enterreset);
document.addEventListener("keydown", entersubmit );
function gameOver() {
    userInput.disabled = true;
    submitButton.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
    document.removeEventListener("keydown",entersubmit);
    document.addEventListener("keydown", enterreset);
}

function resetGame() {
    guessCount = 1;
    guessHistory.length = 0;
    lastResult.textContent = "History:" + guessHistory.join(",");
    lowOrhight.textContent = ""; 
    userInput.disabled = false;
    submitButton.disabled = false;
    resetButton.parentNode.removeChild(resetButton);
    userInput.value = "";
    userInput.focus();
    document.removeEventListener("keydown", enterreset);
    document.addEventListener("keydown", entersubmit);
    randomNumber = Math.floor(Math.random() * 10 + 1);
}
function entersubmit(e) {
    if (e.key === "Enter") {

        checkGuess();
    }
}

function enterreset(e) {
    if (e.key === "Enter") {
        resetGame();
    }
}
