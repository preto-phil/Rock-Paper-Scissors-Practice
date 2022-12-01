

let computerChoice;

let computerChoiceDisplay = document.getElementById("computerChoiceDisplay");

// Generate computer choice function

function getComputerChoice() {
    
    // generate random number
    let randomNumber = Math.floor(Math.random() * 3);

    // allocate random number to specific choice of RPS
    if (randomNumber === 0) {
        computerChoice = 'Rock';
    }
    if (randomNumber === 1) {
        computerChoice = 'Paper';
    }
    if (randomNumber === 2) {
        computerChoice = 'Scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
} 

