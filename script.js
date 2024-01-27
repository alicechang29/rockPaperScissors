const container = document.querySelector("#container");
//const paperButton = document.createElement("button");
//const scissorsButton = document.createElement("button");
const restartGameButton = document.createElement("button");
const results = document.createElement("div");
const playerScoreElement = document.createElement("div");
const computerScoreElement = document.createElement("div");

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

//rockButton.textContent = "ROCK";
//paperButton.textContent = "PAPER";
//scissorsButton.textContent = "SCISSORS";
restartGameButton.textContent = "Play Again!";

const rockButton = document.createElement("img");
rockButton.src = "images/carrot.png";
rockButton.alt = "ROCK";
rockButton.classList.add("imageButton");

const paperButton = document.createElement("img");
paperButton.src = "images/pizza.png";
paperButton.alt = "PAPER";
paperButton.classList.add("imageButton");

const scissorsButton = document.createElement("img");
scissorsButton.src = "images/pizza cutter.png";
scissorsButton.alt = "SCISSORS";
scissorsButton.classList.add("imageButton");

results.classList.add("results");
playerScoreElement.classList.add("playerScoreElement");
computerScoreElement.classList.add("computerScoreElement");
restartGameButton.classList.add("restartGameButton");

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);
container.appendChild(results);
container.appendChild(playerScoreElement);
container.appendChild(computerScoreElement);

//event listeners for the player selection

function initGame() {
  rockButton.addEventListener("click", function () {
    playRound("ROCK");
  });
  paperButton.addEventListener("click", function () {
    playRound("PAPER");
  });
  scissorsButton.addEventListener("click", function () {
    playRound("SCISSORS");
  });
}
initGame();

function getComputerChoice(choices) {
  choices = ["ROCK", "PAPER", "SCISSORS"];
  let choiceIndex = Math.floor(Math.random() * choices.length);
  return choices[choiceIndex];
}

function playRound(playerSelection, computerSelection) {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  computerSelection = getComputerChoice(choices);
  console.log(computerSelection);
  if (playerSelection === computerSelection) {
    results.textContent = `You Tie! Computer selected ${computerSelection}`;
  } else if (
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelection === "ROCK" && computerSelection === "SCISSORS")
  ) {
    results.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else if (
    (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "ROCK") ||
    (playerSelection === "ROCK" && computerSelection === "PAPER")
  ) {
    results.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }
  playerScoreElement.textContent = `Player: ${playerScore}`;
  computerScoreElement.textContent = `Computer: ${computerScore}`;

  roundsPlayed++;

  if (roundsPlayed >= 5 || playerScore >= 5 || computerScore >= 5) {
    if (playerScore > computerScore) {
      results.textContent = `Congrats, you win! ${playerScore} to ${computerScore}`;
    } else {
      results.textContent = `Too bad, you lost ${computerScore} to ${playerScore}. Try again next time!`;
    }
    restartGame();
  }
}

function restartGame() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
  container.appendChild(restartGameButton);
  restartGameButton.addEventListener("click", function () {
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    results.textContent = "";
    playerScoreElement.textContent = "Player: 0";
    computerScoreElement.textContent = "Computer: 0";
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    container.removeChild(restartGameButton);
  });
}
