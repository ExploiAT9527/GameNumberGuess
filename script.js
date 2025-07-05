let randomNumber = Math.floor(Math.random() * 10 + 1);
const userInput = document.querySelector(".guessField");
const submitButton = document.querySelector(".guessSubmit");

const lastResult = document.querySelector(".lastResult");
const lowOrhight = document.querySelector(".lowOrhight")
let guessCount = 1;
let resetButton;
function checkGuess() {
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

    guessCount++;
    userInput.value = "";
}

submitButton.addEventListener("click", checkGuess);

function gameOver() {
    userInput.disabled = true;
    submitButton.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    guessCount = 1;
    lowOrhight.textContent = ""; 
    userInput.disabled = false;
    submitButton.disabled = false;
    resetButton.parentNode.removeChild(resetButton);
    userInput.value = "";
    userInput.focus;
    let randomNumber = Math.floor(Math.random() * 10 + 1);
}
