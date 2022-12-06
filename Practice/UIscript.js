

let computerSelection;
let playerSelection;
let round = 0;
let computerScore = 0;
let playerScore = 0;


let computerSelectionDisplay = document.getElementById("computerSelectionDisplay");

// Generate computer choice function

function getComputerSelection() {
    
    // generate random number
    let randomNumber = Math.floor(Math.random() * 3);

    // allocate random number to specific choice of RPS
    if (randomNumber === 0) {
        computerSelection = 'Rock';
    }
    if (randomNumber === 1) {
        computerSelection = 'Paper';
    }
    if (randomNumber === 2) {
        computerSelection = 'Scissors';
    }
    computerSelectionDisplay.innerHTML = computerSelection;
} 




function playRound() {
    
    getComputerSelection();
    
    if ( playerSelection === 'ROCK' && computerSelection === 'PAPER' || playerSelection === 'PAPER' && computerSelection === 'SCISSORS' || playerSelection === 'SCISSORS' && computerSelection === 'ROCK' ) {
        computerScore = computerScore + 1;
        return "You lose the round!";
    }
    
    if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' || playerSelection === 'PAPER' && computerSelection === 'ROCK' || playerSelection === 'SCISSORS' && computerSelection === 'PAPER' ) {
        playerScore = playerScore + 1;
        return "You win the round!";
    }
    
    if (playerSelection === 'ROCK' && computerSelection === 'ROCK' || playerSelection === 'PAPER' && computerSelection === 'PAPER' || playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS' ) {
        return "It's a draw!";
    }

}



function getPlayerSelection() {



}


function playRound() {
    
    getComputerSelection();
    
    if ( playerSelection === 'ROCK' && computerSelection === 'PAPER' || playerSelection === 'PAPER' && computerSelection === 'SCISSORS' || playerSelection === 'SCISSORS' && computerSelection === 'ROCK' ) {
        computerScore = computerScore + 1;
        return "You lose the round!";
    }
    
    if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' || playerSelection === 'PAPER' && computerSelection === 'ROCK' || playerSelection === 'SCISSORS' && computerSelection === 'PAPER' ) {
        playerScore = playerScore + 1;
        return "You win the round!";
    }
    
    if (playerSelection === 'ROCK' && computerSelection === 'ROCK' || playerSelection === 'PAPER' && computerSelection === 'PAPER' || playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS' ) {
        return "It's a draw!";
    }

}



function game() {

    for (i = 0; i < ; i++) {
        
        round = round + 1;
        console.log("Round: " + round);
        
        selection();

        console.log("Player Choice: " + playerSelection);
               
        console.log(playRound());   
              
        console.log("Player Score: " + playerScore);
        
        console.log("Computer Score: " + computerScore);
        
    }
    if (computerScore > playerScore ) {
        console.log("You lose the game!")
    } else if ( computerScore < playerScore ) {
        console.log("You win the game!")
    } else {
        console.log("You've drawn the game!")
    }
}

console.log(game());

