// Global variables

let computerSelection;
let playerSelection;
let result;
let computerWin;
let computerScore = 0;
let playerWin;
let playerScore = 0;
let draw;



function getComputerSelection() {
    
    let randomNumber = Math.floor(Math.random() * 3);

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
        result = computerWin;
        return "You lose!";
    }
    if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' || playerSelection === 'PAPER' && computerSelection === 'ROCK' || playerSelection === 'SCISSORS' && computerSelection === 'PAPER' ) {
        result = playerWin;
        return "You Win!";
    }
    if (playerSelection === 'ROCK' && computerSelection === 'ROCK' || playerSelection === 'PAPER' && computerSelection === 'PAPER' || playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS' ) {
        result = draw;
        return "You Draw!";
    }

}



function game() {

    for (i = 0; i < 5; i++) {
        
        playerSelection = prompt('ROCK, PAPER, or SCISSORS?');
        playerSelection = playerSelection.toUpperCase();

        // If not rock paper or scissors ask prompt again

        // if (playerSelection != 'ROCK' || playerSelection != 'PAPER' || playerSelection != 'SCISSORS') {
            // alert("Try again please.");
            // playerSelection = prompt('ROCK, PAPER, or SCISSORS?');
            // playerSelection = playerSelection.toUpperCase();
        // }

        console.log("Player Choice: " + playerSelection);
               
        if (result === playerWin) {
            playerScore = playerScore + 1;
        }

        console.log("Player Score: " + playerScore);

        if (result === computerWin) {
            computerScore = computerScore + 1;
        }

        console.log("Computer Score: " + computerScore);

        console.log(playRound());        
    }


    
    // console.log(playRound(playerSelection, computerSelection));
}

console.log(game());

// console.log("Score = " + score);

//// Score holder

// Starts with both scores = 0

// if player win - player score i++

/* 

if (result === playerWin) {
    playerScore = playerScore + 1;
    console.log(playerScore);
}

// if computer win - computer score i++

if (result === computerWin) {
    computerScore = computerScore + 1;
    console.log(computerScore);
}

// if draw - score stays the same

*/