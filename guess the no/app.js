let randomNumber = Math.floor(Math.random() * 100 - 1);
const submit = document.querySelector("#subt");
submit.addEventListener("mouseover", function (e) {
  e.preventDefault();
  submit.style.cursor = "pointer";
});
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const startOver = document.querySelector(".resultParas");
const lowOrHi = document.querySelector(".lowOrHi");
const p = document.createElement("p");
let previousGuesses = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    validate(guess);
  });
}

function validate(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number greater than 1!");
  } else if (guess > 100) {
    alert("Please enter a number less than 500!");
  } else {
    previousGuesses.push(guess);
    if (numGuesses === 11) {
      displayGuesses(guess);
      displayMessage(`Game Over! Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuesses(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //Display clue if guess is too high or too low
  if (guess === randomNumber) {
    displayMessage(`You guessed correctly!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Too low! Try again!`);
  } else if (guess > randomNumber) {
    displayMessage(`Too High! Try again!`);
  }
}

function displayGuesses(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}  `;
  numGuesses++;
  remaining.innerHTML = `${11 - numGuesses}  `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h1>${message}</h1>`;
}

function endGame() {
  //Clear user input
  userInput.value = "";
  //Disable user input button
  userInput.setAttribute("disabled", "");
  //Display Start new Game Button
  p.classList.add("button");
  p.innerHTML = `<h1 id="newGame">Start New Game</h1>`;
  p.addEventListener("mouseover", function (e) {
    e.preventDefault();
    submit.style.cursor = "pointer";
  });
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function () {
    //Pick a new random number
    randomNumber = Math.floor(Math.random() * 100 + 1);
    previousGuesses = [];
    numGuesses = 1;
    guessSlot.innerHTML = "";
    lowOrHi.innerHTML = "";
    remaining.innerHTML = `${11 - numGuesses}  `;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
