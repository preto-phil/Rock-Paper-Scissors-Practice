

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1; 
    // or you can use possibleChoices.length
    
    if (randomNumber === 1) {
        computerChoice = 'Rock';
    } else if (randomNumber === 2) {
        computerChoice = 'Paper';      
    } else if (randomNumber === 3) {
        computerChoice = 'Scissors';
    }

    computerChoiceDisplay.innerHTML = computerChoice;
} 

function getResult() {
    if (computerChoice === userChoice) {
        result = 'It\'s a Draw!';
    } 
    if (computerChoice === 'Rock' && userChoice === 'Scissors' || computerChoice === 'Paper' && userChoice === 'Rock' || computerChoice === 'Scissors' && userChoice === 'Paper') {
        result = 'You Lose!';
    } 
    if (computerChoice === 'Rock' && userChoice === 'Paper' || computerChoice === 'Paper' && userChoice === 'Scissors' || computerChoice === 'Scissors' && userChoice === 'Rock') {
        result = 'You Win!';
    }
    resultDisplay.innerHTML = result;
} 