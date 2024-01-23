function getComputerChoice(choices) {
  choices = ["ROCK", "PAPER", "SCISSORS"];
  let choiceIndex = Math.floor(Math.random() * choices.length);
  return choices[choiceIndex];
}

function playRound(playerSelection, computerSelection) {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  computerSelection = getComputerChoice(choices);
  playerSelection = prompt(`select ${choices}`).toUpperCase();
  if (!choices.includes(playerSelection)) {
    alert(`Please select ${choices}`);
    return playRound();
  }
  if (playerSelection === computerSelection) {
    alert(`Computer selected ${computerSelection}, you tie!`);
    return playRound();
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    return "You Win! Paper beats Rock!";
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    return "You Win! Scissors beats Paper!";
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    return "You Win! Rock beats Scissors!";
  } else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
    return "You Lose! Paper beats Rock!";
  } else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
    return "You Lose! Scissors beats Paper!";
  } else if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
    return "You Lose! Rock beats Scissors!";
  }
}

function game() {
  let wins = [
    "You Win! Paper beats Rock!",
    "You Win! Scissors beats Paper!",
    "You Win! Rock beats Scissors!",
  ];
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let roundResult = playRound();
    alert(roundResult);
    alert(playerScore);
    alert(computerScore);
    if (wins.includes(roundResult)) {
      playerScore++;
    } else {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    return `Congrats, you win! ${playerScore} to ${computerScore}`;
  } else {
    return `Too bad, you lost ${computerScore} to ${playerScore}. Try again next time!`;
  }
}
