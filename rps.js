function getRandomInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice(){
    /*Get random number between 1 and 3 (inclusive) from a helper function*/
    let choice = getRandomInteger(1,3);
    /*If the number is 1 return Rock, if it's 2 return Paper and if it's 3 return Scissors*/
    if (choice === 1){
        return "Rock";
    } else if (choice === 2){
        return "Paper";
    } else{
        return "Scissors";
    }
}

function formatResultString(playerSelection, computerSelection, resultInteger){
    /*Return tie string if 0, lose string if -1 and win string if 1*/
    if (resultInteger === 0){
        return `It's a tie.`;
    } else if (resultInteger === -1){
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    } else if (resultInteger === 1){
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
}

function formatGameResultString(gameStatus){
    let gameResultString = "Game Over! "
    if (gameStatus>0){
        return gameResultString+"You won!";
    } else if (gameStatus == 0){
        return gameResultString+"It's a tie!";
    } else{
        return gameResultString+"You lost!";
    }
}


function playRound(playerSelection, computerSelection){
    /*Evaluate round and return an integer based on the result*/
    /*Create tie condition and return 0 if true and move on to the losing conditions if false*/
    /*Create the losing conditions for r/p/s vs p/s/r and return -1 if true*/
    /*If none of the conditions apply return 1*/
    if (playerSelection === computerSelection){
        return 0;
    } else if (playerSelection === "Rock" && computerSelection === "Paper"){
        return -1;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        return -1;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        return -1;
    } else {
        return 1;
    }
}

function updateTally(resultInteger) {
    if (resultInteger===0) return;

    const playerTally = document.querySelector("#player-counter")
    const computerTally = document.querySelector("#opponent-counter")

    if (resultInteger === 1){
        playerTally.textContent = +playerTally.textContent + 1;
    } else {
        computerTally.textContent = +computerTally.textContent + 1;
    }
}

function getGameStatus() {
    const playerTally = document.querySelector("#player-counter")
    const computerTally = document.querySelector("#opponent-counter")

    if (playerTally.textContent === "5") {
        return 1;
    } else if (computerTally.textContent === "5") {
        return -1;
    } else {
        return 0;
    }
}

function showResult(string, resultInteger){
    const resultBox = document.querySelector(".results-container");

    const displayText = document.createElement("div")

    displayText.textContent = string;
    displayText.classList.add("round");

    if (resultInteger === -1){
        displayText.classList.add("round-lost");
    } else if (resultInteger === 1){
        displayText.classList.add("round-won");
    }

    resultBox.appendChild(displayText);
}

function restartGame() {
    const resultBox = document.querySelector(".results-container");
    while (resultBox.firstChild) {
        resultBox.removeChild(resultBox.firstChild);
    }

    const playerTally = document.querySelector("#player-counter");
    const computerTally = document.querySelector("#opponent-counter");

    playerTally.textContent = "0";
    computerTally.textContent = "0";
}

function chooseRPS(){
    if (getGameStatus()) return restartGame();
    const playerSelection = this.name;
    const computerSelection = getComputerChoice();
    const resultInteger = playRound(playerSelection, computerSelection);
    const resultString = formatResultString(playerSelection, computerSelection, resultInteger);
    showResult(resultString, resultInteger)
    updateTally(resultInteger)
    const gameStatus = getGameStatus();
    if (gameStatus !== 0){
        const gameOverString = formatGameResultString(gameStatus);
        showResult(gameOverString, resultInteger)
    }
}

const choices = document.querySelectorAll(".rps-choice");
choices.forEach((choice) => choice.addEventListener('click', chooseRPS));
