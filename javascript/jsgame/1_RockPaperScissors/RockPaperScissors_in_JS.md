# Rock Paper Scissors

## Step 1, prepare base index.html and app.js

Create `index.html` through typing `html5` to get following base

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/style.css" rel="stylesheet">
    </head>
    <body>
    
    </body>
</html>
```

Create `app.js` file in same folder, and update `index.html` file as below

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Rock Paper Scissors Game</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <script src="app.js" charset="udf-8"></script>
    </body>
</html>
```

## Step 2, add html layout

Update `index.html`, add text labels and buttons, notice we give `id` for every element, which will be used in next step by JavaScript.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Rock Paper Scissors Game</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        
        <h2>Computer Choice: <span id="computer-choice"></span></h2>
        <h2>User Choice: <span id="user-choice"></span></h2>
        <h2>Result: <span id="result"></span></h2>

        <button id="rock">Rock</button>
        <button id="paper">Paper</button>
        <button id="scissors">Scissors</button>

        <script src="app.js" charset="udf-8"></script>
    </body>
</html>
```

Use live server in VS Code, to see the webpage in browser, you should see 3 labels and 3 buttons.

## Step 3, add logic to buttons

When press button, the content of label should be reflected - computer choice will be generated and compare with your choise and figure out who is win!

In `app.js`, firstly, we should pick out the elements of labels, using `document.getElementById`.

```js
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
```

Next, get possible choices from the buttons in HTML, to do that, we need to give same Class name for button in `index.html`, as below:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Rock Paper Scissors Game</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        
        <h2>Computer Choice: <span id="computer-choice"></span></h2>
        <h2>User Choice: <span id="user-choice"></span></h2>
        <h2>Result: <span id="result"></span></h2>

        <button className="button" id="rock">Rock</button>
        <button className="button" id="paper">Paper</button>
        <button className="button" id="scissors">Scissors</button>

        <script src="app.js" charset="udf-8"></script>
    </body>
</html>
```

## Step 4, response user choice and give display

With that, in `app.js`, we can add following `possibleChoices` section using `document.querySelectorAll`:

```js
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');

let userChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
}))
```

## Step 5, generate Computer Choice

Use `Math.random()` to generate random number, `Math.floor()` to round down, and plus 1 to get (1, 2, 3) instead of (0, 1, 2), put this as one separate function.

You can add `console.log(randomNumber);` to observe the number generating.

```js
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');

let userChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1; // or you can use possibleChoices.length
    console.log(randomNumber);
}
```

Add converting from number to computer choice. and write to HTML page:

```js
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');

let userChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
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
```

## Step 6, get results via another function

```js
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');

let userChoice;

let result;

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
        result = 'It\'s a draw!'
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'You win!';
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'You lose!';
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'You win!';
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'You lose!';
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'You win!';
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'You lose!';
    }
    resultDisplay.innerHTML = result;
}
```

## Step 7, fine tuning, add score board

Final files as below 

File: `index.html`

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Rock Paper Scissors Game</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>

        <h1>Rock Paper Scissors Game</h1>
        
        <h2>Computer Choice: <span id="computer-choice"></span></h2>
        <h2>User Choice: <span id="user-choice"></span></h2>
        <h2>Result: <span id="result"></span></h2>

        <h2>Computer Score: <span id="computerScore"></span>, Your Score: <span id="userScore"></span></h2>

        <button className="button" id="rock">Rock</button>
        <button className="button" id="paper">Paper</button>
        <button className="button" id="scissors">Scissors</button>

        <script src="app.js" charset="udf-8"></script>
    </body>
</html>
```

File: `app.js`

```js
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
```