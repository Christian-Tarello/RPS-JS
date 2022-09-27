function getRandomInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function capitalizeFirstLetter(word){
    let firstLetter = word.charAt(0).toUpperCase();
    let restOfString = word.slice(1,).toLowerCase();
    return firstLetter+restOfString;
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

function formatGameResultString(tally){
    let gameResultString = "Game Over! "
    if (tally>0){
        return gameResultString+"You won!";
    } else if (tally == 0){
        return gameResultString+"It's a tie!";
    } else{
        return gameResultString+"You lost!";
    }
}

function sanitizePlayerInput(playerSelection){
    /*Make sure player input is suitable for the game and prompt the use again if not*/
    playerSelection = capitalizeFirstLetter(playerSelection);
    while (playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors"){
        playerSelection = prompt("Invalid choice, choose again. Rock, Paper or Scissors?");
        playerSelection = capitalizeFirstLetter(playerSelection);
    }
    return playerSelection;
    
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

function game(){
    /*Declare a variable to keep count of wins/losses*/
    let tally = 0;
    /*Declare a number of rounds variable*/
    let rounds = 5
    /*Loop through 5 times*/
    for (let i = 0; i<rounds; i++){
        /*Prompt a user choice and get random computer choice*/
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let computerSelection = getComputerChoice();

        /*Standarize PlayerSelection using a helper function and store the result in the same variable*/
        playerSelection = sanitizePlayerInput(playerSelection);

        /*Play round and return result*/
        let resultInteger = playRound(playerSelection, computerSelection);

        /*Format result string given the result and log it*/
        let resultString = formatResultString(playerSelection, computerSelection, resultInteger);
        showResult(resultString, resultInteger)
        console.log(resultString);

        /*Add result to the tally*/
        tally+=resultInteger;
    }
    /*Logs final result to console*/
    console.log(formatGameResultString(tally));  
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


function chooseRPS(){
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

const choices = document.querySelectorAll(".rps-choice");
choices.forEach((choice) => choice.addEventListener('click', chooseRPS));
