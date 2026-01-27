const gameBoard = (() => {
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
  let usedSquares = [];
  const reset = () => {
    usedSquares = [];
  };
  return { reset };
})();

//gameBoard.resetGame();

function createPlayer(name, marker) {
  let playerName = name;
  let playerMarker = marker;
  let playerSquares = [];
  //   const getName = () => name;
  const makeMove = (square) => {
    playerSquares.push(square);
  };
  const reset = () => {
    playerSquares = [];
  };
  return { name, marker, makeMove, reset };
}

const gameController = (() => {
  const player1 = createPlayer("bob", "X");
  const player2 = createPlayer("ross", "O");
  let gameOver = false;
  let currentPlayer = player1;
  const resetGame = () => {
    player1.reset();
    player2.reset();
    currentPlayer = player1;
    gameOver = false;
  };
  const playTurn = (index) => {
    if (gameOver) return;
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
