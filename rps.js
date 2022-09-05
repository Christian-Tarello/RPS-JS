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

function playRound(playerSelection, computerSelection){
    /*Standarize PlayerSelection using a helper function and store the result in the same variable*/
    playerSelection = capitalizeFirstLetter(playerSelection);
    /*Format win string and store it in a variable*/
    let winString = `You win! ${playerSelection} beats ${computerSelection}.`;
    /*Format lose string and store it in a variable*/
    let loseString = `You lose! ${computerSelection} beats ${playerSelection}.`;
    /*Format tie string and store it in a variable*/
    let tieString = `It's a tie.`;
    /*Create tie condition and return the tie string if true and move on to the losing conditions if false*/
    /*Create the losing conditions for r/p/s vs p/s/r and return the losing string if true*/
    /*If none of the conditions apply return win string*/
    if (playerSelection === computerSelection){
        return tieString;
    } else if (playerSelection === "Rock" && computerSelection === "Paper"){
        return loseString;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        return loseString;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        return loseString;
    } else {
        return winString;
    }
}

function game(){
    /*Loop through 5 times*/
    /*In each loop prompt an answer, run a round and log the result to the console*/
    for (let i = 0; i<5; i++){
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result)
    }
    
}