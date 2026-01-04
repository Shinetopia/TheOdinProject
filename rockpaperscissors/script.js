playGame();

const body = document.querySelector("body");

function playGame() {
  const resultsContainer = document.querySelector("#results-container");
  const winnerAnnouncement = document.createElement("p");
  let rpsMenu = document.querySelector("#rps-options");
  let humanScore = 0;
  let computerScore = 0;
  let endGame = false;

  rpsMenu.addEventListener("click", (event) => {
    let target = event.target;
    switch (target.id) {
      case "rock":
        playRound("rock", getComputerChoice());
        break;
      case "paper":
        playRound("paper", getComputerChoice());
        break;
      case "scissors":
        playRound("scissors", getComputerChoice());
        break;
    }
  });

  function playRound(humanChoice, computerChoice) {
    // showing round results
    const roundResult = document.querySelector("#round-result");
    const runningScore = document.querySelector("#running-score");
    let combo = humanChoice + ":" + computerChoice;
    if (endGame === true) {
      humanScore = 0;
      computerScore = 0;
      resultsContainer.removeChild(winnerAnnouncement);
      endGame = false;
    }
    switch (combo) {
      case "rock:scissors":
        humanScore++;
        roundResult.textContent =
          "You win! " + humanChoice + " beats " + computerChoice;
        runningScore.textContent =
          "Human: " + humanScore + " | Computer: " + computerScore;
        break;
      case "scissors:paper":
        humanScore++;
        roundResult.textContent =
          "You win! " + humanChoice + " beats " + computerChoice;
        runningScore.textContent =
          "Human: " + humanScore + " | Computer: " + computerScore;
        break;
      case "paper:rock":
        humanScore++;
        roundResult.textContent =
          "You win! " + humanChoice + " beats " + computerChoice;
        runningScore.textContent =
          "Human: " + humanScore + " | Computer: " + computerScore;
        break;
      case "scissors:rock":
        computerScore++;
        roundResult.textContent =
          "You lose! " + computerChoice + " beats " + humanChoice;
        runningScore.textContent =
          "Human: " + humanScore + " | Computer: " + computerScore;
        break;
      case "paper:scissors":
        computerScore++;
        roundResult.textContent =
          "You lose! " + computerChoice + " beats " + humanChoice;
        runningScore.textContent =
          "Human: " + humanScore + " | Computer: " + computerScore;
        break;
      case "rock:scissors":
        computerScore++;
        roundResult.textContent =
          "You lose! " + computerChoice + " beats " + humanChoice;
        runningScore.textContent =
          "Human: " + humanScore + " | Computer: " + computerScore;
        break;
      default:
        roundResult.textContent = "It's a tie! Go again";
        runningScore.textContent =
          "Human: " + humanScore + " | Computer: " + computerScore;
    }
    if (humanScore >= 5) {
      winnerAnnouncement.textContent = "yOU win! SLAY.";
      resultsContainer.appendChild(winnerAnnouncement);
      endGame = true;
    } else if (computerScore >= 5) {
      winnerAnnouncement.textContent = "yOU got beat by a bot.";
      resultsContainer.appendChild(winnerAnnouncement);
      endGame = true;
    }
  }
}

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0) {
    return "rock";
  } else if (randomNum == 1) {
    return "paper";
  }
  return "scissors";
}

// function getHumanChoice() {
//   let humanChoice = prompt("Rock/Paper/Scissors");
//   return humanChoice.toLowerCase();
// }
