
function selection() {
    playerSelection = prompt('ROCK, PAPER, or SCISSORS?');
    playerSelection = playerSelection.toUpperCase();

// If not rock paper or scissors ask prompt again

    if (playerSelection == 'ROCK' || playerSelection == 'PAPER' || playerSelection == 'SCISSORS')  {
        return playerSelection;
    } else { 
        alert("Try again please.");
        return selection();
    }
    
}

console.log(selection())
