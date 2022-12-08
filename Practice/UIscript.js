
// Link HTML div's and spans to JS variables

let playerDisplay = document.getElementById('playerChoiceDisplay');
let computerDisplay = document.getElementById('computerChoiceDisplay');
let result = document.getElementById('resultDisplay');
let playerScore = document.getElementById('playerScoreDisplay');
let computerScore = document.getElementById('computerScoreDisplay');

let playerChoice;
let computerSelection;

// Generate random computer choice

function getComputerChoice() {
    let myArray = ['Rock', 'Paper', 'Scissors'];
    let randomArray = Math.floor(Math.random() * myArray.length);
    computerSelection = myArray[randomArray];
    return computerSelection;
}

// Create function that determines win, lose or draw

function getResult() {
    if (playerChoice == 'Rock' && computerSelection == 'Scissors' || playerChoice == 'Paper' && computerSelection == 'Rock' || playerChoice == 'Scissors' && computerSelection == 'Paper') {
        console.log("You win this round!");
        result.innerHTML = "You win this round!";
    } else if (playerChoice == computerSelection) {
        console.log("You draw this round!");
        result.innerHTML = "You draw this round!";
    } else {
        console.log("You lose this round!");
        result.innerHTML = "You lose this round!";
    }
}

// Link buttons to Javascript code

let playerSelection = document.querySelectorAll('button');

// Create function that when buttons presses shit goes down

playerSelection.forEach(playerSelection => playerSelection.addEventListener('click', (playRound) => {
    playerChoice = playRound.target.id;
    playerDisplay.innerHTML = playerChoice;
    console.log("Player choice: " + playerChoice);
        
    getComputerChoice();
    computerDisplay.innerHTML = computerSelection;
    console.log("Computer choice: " + computerSelection);

    getResult();

}))
