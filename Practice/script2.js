

let computerSelection;

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

