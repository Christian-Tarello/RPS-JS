function getRandomInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function capitalizeFirstLetter(word){
    firstLetter = word.charAt(0).toUpperCase()
    restOfString = word.slice(1,).toLowerCase()
    return firstLetter+restOfString
}

function getComputerChoice(){
    /*Get random number between 1 and 3 (inclusive) from a helper function*/
    /*If the number is 1 return Rock, if it's 2 return Paper and if it's 3 return Scissors*/
}

function playRound(PlayerSelection, ComputerSelection){
    /*Standarize PlayerSelection using a helper function and store the result in the same variable
    /*Format win string and store it in a variable*/
    /*Format lose string and store it in a variable*/
    /*Format tie string and store it in a variable*/
    /*Create tie condition and return the tie string if true and move on to the losing conditions if false
    /*Create the losing conditions for r/p/s vs p/s/r and return the losing string if true
    /*If none of the conditions apply return win string*/
}

function game(){
    /*Loop through 5 times*/
    /*In each loop prompt an answer, run a round and log the result to the console*/
}