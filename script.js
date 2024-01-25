const container = document.querySelector("#container");

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

rockButton.textContent = "ROCK";
paperButton.textContent = "PAPER";
scissorsButton.textContent = "SCISSORS";
//event listeners for the player selection

rockButton.addEventListener("click", function () {
  playRound("ROCK");
});
paperButton.addEventListener("click", function () {
  playRound("PAPER");
});
scissorsButton.addEventListener("click", function () {
  playRound("SCISSORS");
});

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);

let results = document.createElement("div");
results.classList.add("results");
container.appendChild(results);

let playerScoreElement = document.createElement("div");
playerScoreElement.classList.add("playerScoreElement");
container.appendChild(playerScoreElement);

let computerScoreElement = document.createElement("div");
computerScoreElement.classList.add("computerScoreElement");
container.appendChild(computerScoreElement);

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

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
    playRound();
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
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
}
