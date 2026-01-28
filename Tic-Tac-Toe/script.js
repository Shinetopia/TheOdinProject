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
  const makeMove = (square) => {
    Squares.push(square);
  };
  const reset = () => {
    Squares.length = 0;
  };
  return { name, marker, Squares, makeMove, reset };
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
  const resetGame = () => {
    player1.reset();
    player2.reset();
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
      console.log(`${player1.name} won!`);
    } else if (
      winningCombos.some((combo) =>
        combo.every((index) => player2.Squares.includes(index))
      )
    ) {
      gameOver = true;
      console.log(`${player2.name} won!`);
    } else if (!gameBoard.board.includes("")) {
      gameOver = true;
      console.log("It's a tie!");
    }
  };
  const playTurn = (index) => {
    if (gameOver) return;
    if (!gameBoard.fillSquare(index, currentPlayer.marker)) return;
    console.log(gameBoard.board);
    currentPlayer.makeMove(index);
    checkGameStatus();
    if (!gameOver) {
      currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
  };
  return { resetGame, playTurn };
})();
//gameController.resetGame();
//gameController.playTurn();

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
