const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  const reset = () => {
    board.fill("");
  };
  const fillSquare = (index, marker) => {
    if (board[index] !== "") return false;
    board.splice(index, 1, marker);
    return true;
  };
  return { board, reset, fillSquare };
})();

function createPlayer(name, marker) {
  let Squares = [];
  const setName = (newName) => {
    name = newName;
  };
  const getName = () => name;
  const makeMove = (square) => {
    Squares.push(square);
  };
  const reset = () => {
    Squares.length = 0;
  };
  return { setName, getName, marker, Squares, makeMove, reset };
}

const gameController = (() => {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const player1 = createPlayer("bob", "X");
  const player2 = createPlayer("ross", "O");
  let gameOver = false;
  let currentPlayer = player1;
  const getCurrentPlayer = () => currentPlayer;
  const resetGame = (name1, name2) => {
    player1.reset();
    player2.reset();
    player1.setName(name1);
    player2.setName(name2);
    gameBoard.reset();
    currentPlayer = player1;
    gameOver = false;
  };
  const checkGameStatus = () => {
    if (
      winningCombos.some((combo) =>
        combo.every((index) => player1.Squares.includes(index))
      )
    ) {
      gameOver = true;
      return `${player1.getName()} won!`;
    } else if (
      winningCombos.some((combo) =>
        combo.every((index) => player2.Squares.includes(index))
      )
    ) {
      gameOver = true;
      return `${player2.getName()} won!`;
    } else if (!gameBoard.board.includes("")) {
      gameOver = true;
      return "It's a tie!";
    }
    return null;
  };
  const playTurn = (index) => {
    if (gameOver) return false;
    if (!gameBoard.fillSquare(index, getCurrentPlayer().marker)) {
      return false;
    }
    console.log(gameBoard.board);
    currentPlayer.makeMove(index);
    const result = checkGameStatus();
    if (!gameOver) {
      currentPlayer = currentPlayer === player1 ? player2 : player1;
      return true;
    }
    return result || true;
  };
  return { getCurrentPlayer, resetGame, playTurn };
})();
//gameController.resetGame();
//gameController.playTurn();

const displayController = (() => {
  const boardContainer = document.querySelector("#tic-tac-toe-container");
  const submitBtn = document.querySelector("button");
  const statusText = document.querySelector("#status-text");
  const render = (square, index) => {
    const p = square.querySelector("p");
    p.textContent = gameBoard.board[index];
    statusText.textContent = `${gameController
      .getCurrentPlayer()
      .getName()}'s turn`;
  };
  const renderReset = () => {
    const player1Name = document.querySelector("#player1-name").value;
    const player2Name = document.querySelector("#player2-name").value;
    gameController.resetGame(player1Name, player2Name);
    const squares = boardContainer.querySelectorAll("[data-index]");
    squares.forEach((square) => {
      const p = square.querySelector("p");
      p.textContent = "";
    });
    statusText.textContent = `${gameController
      .getCurrentPlayer()
      .getName()}'s turn`;
  };
  const handleClick = (event) => {
    const target = event.target;
    const square = target.closest("[data-index]");
    const index = Number(target.dataset.index);
    const moveResult = gameController.playTurn(index);
    if (moveResult) {
      render(square, index);
      if (typeof moveResult === "string") {
        statusText.textContent = moveResult;
      }
    }
  };
  boardContainer.addEventListener("click", handleClick);
  submitBtn.addEventListener("click", renderReset);
  return { render, handleClick };
})();
//displayController.render();

// const player1 = Player("bob", "X");
// const player2 = Player("ross", "O");

// const Player = (name, level) => {
//   let health = level * 2;
//   const getLevel = () => level;
//   const getName = () => name;
//   const die = () => {};
//   const damage = (x) => {
//     health -= x;
//     if (health <= 0) {
//       die();
//     }
//   };
//   const attack = (enemy) => {
//     if (level < enemy.getLevel()) {
//       damage(1);
//       console.log(`${enemy.getName()} has damaged ${name}`);
//     }
//     if (level >= enemy.getLevel()) {
//       enemy.damage(1);
//       console.log(`${name} has damaged ${enemy.getName()}`);
//     }
//   };
//   return { attack, damage, getLevel, getName };
// };

// const jim = Player("jim", 10);
// const badGuy = Player("ross", 5);
// jim.attack(badGuy);
// badGuy.attack(jim);

// // global scope, closure scope chain
// const e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       // outer functions scope
//       return function (d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4)); // 20
