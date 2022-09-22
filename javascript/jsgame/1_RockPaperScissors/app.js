const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');

let userChoice;

let result;

let computerScore = 0, userScore = 0;

const computerScoreDisplay = document.getElementById('computerScore');
const userScoreDisplay = document.getElementById('userScore');

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1; // or you can use possibleChoices.length
    // console.log(randomNumber);

    if (randomNumber === 1) {
        computerChoice = 'rock';
    }

    if (randomNumber === 2) {
        computerChoice = 'scissors';
    }

    if (randomNumber === 3) {
        computerChoice = 'paper';
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'It\'s a draw!';
        computerScore += 1;
        userScore += 1;
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'You win!';
        userScore += 3;
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'You lose!';
        computerScore += 3;
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'You win!';
        userScore += 3;
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'You lose!';
        computerScore += 3;
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'You win!';
        userScore += 3;
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'You lose!';
        computerScore += 3;
    }
    resultDisplay.innerHTML = result;
    computerScoreDisplay.innerHTML = computerScore;
    userScoreDisplay.innerHTML = userScore;
}