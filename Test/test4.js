
//// create variable linked to button with event listeners - 

// Version 1

//const rockButton = document.getElementById('Rock').addEventListener('click', playRound());

//const paperButton = document.getElementById('Paper').addEventListener('click', playRound());

//const scissorsButton = document.getElementById('Scissors').addEventListener('click', playRound());

// Version 2

const rockButton = document.getElementById('Rock').addEventListener('click', innerHTML = 'Rock');

const paperButton = document.getElementById('Paper').addEventListener('click', playRound());

const scissorsButton = document.getElementById('Scissors').addEventListener('click', playRound());


/////////////////////

//let playerSelection = document.querySelectorAll('button');


/////////////////////

/*


document.getElementsByName('button').onclick = function() {
    console.log(playerSelection);
}


*/

//// Create function that randomly selects RPS - Completed

function getComputerSelection() {  
    let myArray = ['Rock', 'Paper', 'Scissors'];
    let randomArray = Math.floor(Math.random() * myArray.length);
    let computerSelection = myArray[randomArray];
    return computerSelection;
} 

//// Create a function that plays a round of RPS - Incomplete

function playRound() {
    
    getComputerSelection();
    
    /*
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
    */

    console.log("Computer choice: " + getComputerSelection());
}





/* 



let playerSelection;
let round = 0;
let computerScore = 0;
let playerScore = 0;


let computerSelectionDisplay = document.getElementById("computerSelectionDisplay");

function getComputerSelection() {
    
    let randomNumber = Math.floor(Math.random() * 3);

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

*/