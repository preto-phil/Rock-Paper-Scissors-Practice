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



//// Call playRound function to play a round

// console.log(playRound(playerSelection, computerSelection));

// Game

function game() {



    // Write a loop function

    for (i = 0; i < 5; i++) {
        
        playerSelection = prompt('ROCK, PAPER, or SCISSORS?');
        playerSelection = playerSelection.toUpperCase();

        // If not rock paper or scissors ask prompt again

        if (playerSelection != 'ROCK' || playerSelection != 'PAPER' || playerSelection != 'SCISSORS') {
            alert("Try again please.");
            playerSelection = prompt('ROCK, PAPER, or SCISSORS?');
            playerSelection = playerSelection.toUpperCase();
        }

        console.log("Player Choice: " + playerSelection);
        
        console.log(playRound(playerSelection, computerSelection));        
    }


    
    // console.log(playRound(playerSelection, computerSelection));
}

console.log(game());

// console.log("Score = " + score);

//// Score holder

// Starts with both scores = 0

// if player win - player score i++

// if computer win - computer score i++

// if draw - score stays the same