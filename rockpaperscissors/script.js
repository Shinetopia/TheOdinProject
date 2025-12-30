playGame();

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (humanScore < computerScore) {
    console.log("Get gud bruh");
  } else {
    console.log("Okay king, slay");
  }

  function playRound(humanChoice, computerChoice) {
    let combo = humanChoice + ":" + computerChoice;
    switch (combo) {
      case "rock:scissors":
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
        break;
      case "scissors:paper":
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
        break;
      case "paper:rock":
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
        break;
      case "scissors:rock":
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
        break;
      case "paper:scissors":
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
        break;
      case "rock:scissors":
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
        break;
      default:
        console.log("It's a tie! Go again");
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

function getHumanChoice() {
  let humanChoice = prompt("Rock/Paper/Scissors");
  return humanChoice.toLowerCase();
}
