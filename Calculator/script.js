let num1 = "";
let operator = "";
let num2 = "";
let finishOpFlag = false;
// const operators = ["add", "subtract", "multiply", "divide"];
const gridContainer = document.querySelector(".grid-container");
const display = document.querySelector("#display-content");

/*
 * 1 + 2
 * 2 + 1
 */

gridContainer.addEventListener("click", (event) => {
  let target = event.target;
  if (!isNaN(target.id)) {
    if (operator === "") {
      num1 += target.id;
      updateDisplay(num1);
    } else {
      num2 += target.id;
      updateDisplay(num2);
    }
  } else if (target.id === "clear") {
    num1 = "";
    num2 = "";
    operator = "";
    updateDisplay(0);
  } else if (target.classList.contains("operator")) {
    if (num1 !== "" && num2 !== "" && operator !== "") {
      console.log("num1: " + num1);
      console.log("num2: " + num2);
      let result = operate(Number(num1), Number(num2), operator);
      updateDisplay(result);
      num1 = result;
      num2 = "";
    }
    operator = target.id;
    let currentActive = gridContainer.querySelector(".toggle");
    console.log(operator);
    if (currentActive && currentActive !== target) {
      currentActive.classList.remove("toggle");
    }
    target.classList.toggle("toggle");
  }
});

function updateDisplay(num) {
  display.textContent = num;
}

// function updateDisplay(num, prevOpFlag) {
//   if (stack.length === 0) {
//     display.textContent = "0";
//   } else if (prevOpFlag === true) {
//     display.textContent = num;
//   } else {
//     display.textContent = stack.join("");
//   }
// }

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(num1, num2, operator) {
  switch (operator) {
    case "add":
      return add(num1, num2);
    case "subtract":
      return subtract(num1, num2);
    case "multiply":
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
    case "equal":
      return (finishOpFlag = true);
  }
}
