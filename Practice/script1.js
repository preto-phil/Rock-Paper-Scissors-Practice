// Global variables

let computerSelection;
let playerSelection;


// Generate computer choice function

function getComputerSelection() {
    
    // generate random number
    let randomNumber = Math.floor(Math.random() * 3);

    // allocate random number to specific choice of RPS
    if (randomNumber === 0) {
        computerSelection = 'ROCK';
        console.log(("Computer choice: " + computerSelection));
    }
    if (randomNumber === 1) {
        computerSelection = 'PAPER';
        console.log(("Computer choice: " + computerSelection));
    }
    if (randomNumber === 2) {
        computerSelection = 'SCISSORS';
        console.log(("Computer choice: " + computerSelection));
    }
} 


function playRound() {
    
    getComputerSelection();
    
    if ( playerSelection === 'ROCK' && computerSelection === 'PAPER' || playerSelection === 'PAPER' && computerSelection === 'SCISSORS' || playerSelection === 'SCISSORS' && computerSelection === 'ROCK' ) {
        return "You lose!";
    }
    if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' || playerSelection === 'PAPER' && computerSelection === 'ROCK' || playerSelection === 'SCISSORS' && computerSelection === 'PAPER' ) {
        return "You Win!";
    }
    if (playerSelection === 'ROCK' && computerSelection === 'ROCK' || playerSelection === 'PAPER' && computerSelection === 'PAPER' || playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS' ) {
        return "You Draw!";
    }

}

// Player selection section

playerSelection = prompt('ROCK, PAPER, or SCISSORS?');
playerSelection = playerSelection.toUpperCase();
console.log("Player Choice: " + playerSelection);

// Call playRound function to play a round

console.log(playRound(playerSelection, computerSelection));

