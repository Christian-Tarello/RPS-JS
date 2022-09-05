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

function playRound(PlayerSelection, ComputerSelection){
    /*Standarize PlayerSelection using a helper function and store the result in the same variable*/
    PlayerSelection = capitalizeFirstLetter(PlayerSelection);
    /*Format win string and store it in a variable*/
    let winString = `You win! {PlayerSelection} beats {ComputerSelection}.`
    /*Format lose string and store it in a variable*/
    let loseString = `You lose! {ComputerSelection} beats {PlayerSelection}.`
    /*Format tie string and store it in a variable*/
    let tieString = `It's a tie.`
    /*Create tie condition and return the tie string if true and move on to the losing conditions if false*/
    /*Create the losing conditions for r/p/s vs p/s/r and return the losing string if true*/
    /*If none of the conditions apply return win string*/
    if (PlayerSelection === ComputerSelection){
        return tieString
    } else if (PlayerSelection === "Rock" && ComputerSelection === "Paper"){
        return loseString
    } else if (PlayerSelection === "Paper" && ComputerSelection === "Scissors"){
        return loseString
    } else if (PlayerSelection === "Scissors" && ComputerSelection === "Rock"){
        return loseString
    } else {
        return winString
    }
}

function game(){
    /*Loop through 5 times*/
    /*In each loop prompt an answer, run a round and log the result to the console*/
}