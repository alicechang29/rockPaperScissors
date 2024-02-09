const container = document.querySelector("#container");
const gameState = document.createElement("div");
const restartGameButton = document.createElement("button");
const results = document.createElement("div");
const playerScoreElement = document.createElement("div");
const computerScoreElement = document.createElement("div");
const winnerDeclaration = document.createElement("div");

restartGameButton.textContent = "Play Again!";

const rockButton = document.createElement("img");
rockButton.src = "images/rock2.png";
rockButton.alt = "ROCK";
rockButton.classList.add("imageButton");

const paperButton = document.createElement("img");
paperButton.src = "images/paper.png";
paperButton.alt = "PAPER";
paperButton.classList.add("imageButton");

const scissorsButton = document.createElement("img");
scissorsButton.src = "images/scissors.png";
scissorsButton.alt = "SCISSORS";
scissorsButton.classList.add("imageButton");

results.classList.add("results");
playerScoreElement.classList.add("playerScoreElement");
computerScoreElement.classList.add("computerScoreElement");
winnerDeclaration.classList.add("winnerDeclaration");
restartGameButton.classList.add("restartGameButton");

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);
container.appendChild(gameState);
gameState.appendChild(results);
gameState.appendChild(playerScoreElement);
gameState.appendChild(computerScoreElement);
gameState.appendChild(winnerDeclaration);

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

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  computerSelection = getComputerChoice(choices);
  robotImageChange(computerSelection);

  if (playerSelection === computerSelection) {
    results.textContent = `You Tie! Alfred also selected ${computerSelection}`;
  } else if (
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelection === "ROCK" && computerSelection === "SCISSORS")
  ) {
    results.textContent = `You Win! Your ${playerSelection} beats Alfred's ${computerSelection}`;
    playerScore++;
  } else if (
    (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "ROCK") ||
    (playerSelection === "ROCK" && computerSelection === "PAPER")
  ) {
    results.textContent = `You Lose! Alfred's ${computerSelection} beats your ${playerSelection}`;
    computerScore++;
  }
  playerScoreElement.textContent = `Player: ${playerScore}`;
  computerScoreElement.textContent = `Alfred: ${computerScore}`;
  gameEvaluator();
}

function gameEvaluator() {
  if (playerScore === 3 || computerScore === 3) {
    if (playerScore > computerScore) {
      winnerDeclaration.textContent = `Congrats, you win! ${playerScore} to ${computerScore}`;
    } else {
      winnerDeclaration.textContent = `Too bad, you lost ${computerScore} to ${playerScore}. Try again next time!`;
    }
    disableButtons();
    restartGame();
  }
}

function robotImageChange(computerSelection) {
  if (computerSelection === "ROCK") {
    document.querySelector(".robot").src = "images/alfred-rock2.png";
  } else if (computerSelection === "PAPER") {
    document.querySelector(".robot").src = "images/alfred-paper2.png";
  } else {
    document.querySelector(".robot").src = "images/alfred-scissors2.png";
  }
}

function disableButtons() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

function enableButtons() {
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
}

function restartGame() {
  gameState.appendChild(restartGameButton);
  document.querySelector(".robot").src = "images/robot.png";
  restartGameButton.addEventListener("click", function () {
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    results.textContent = "";
    winnerDeclaration.textContent = "";
    playerScoreElement.textContent = "Player: 0";
    computerScoreElement.textContent = "Alfred: 0";
    enableButtons();
    container.removeChild(restartGameButton);
  });
}
