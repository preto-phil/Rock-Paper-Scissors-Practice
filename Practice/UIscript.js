
//////////////

//// create variable linked to button

const rockButton = document.querySelector('#Rock');

const paperButton = document.querySelector('#Paper');

const scissorButton = document.querySelector('#Scissors');


//// Create event listeners added to buttons

rockButton.addEventListener('click', playRound());

paperButton.addEventListener('click', playRound());

scissorsButton.addEventListener('click', playRound());


//// Player Selection

playerSelection = 

/////////////////////




function getComputerSelection() {  
    let myArray = ['Rock', 'Paper', 'Scissors'];
    let randomArray = Math.floor(Math.random * myArray.length);
    let computerSelection = myArray[randomArray];
    return computerSelection;
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
    console.log(getComputerSelection())
    console.log();
}










//// Console log when buttons clicked

console.log();

console.log();

console.log();

console.log();



































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