const num1 = 0;
// const operator = 0;
const num2 = 0;
let finishOpFlag = false;
let stack = [];
const operators = ["add", "subtract", "multiply", "divide"];
const gridContainer = document.querySelector(".grid-container");
const display = document.querySelector("#display-content");

/*
 * 1 + 2
 * 2 + 1
 */

gridContainer.addEventListener("click", (event) => {
  let target = event.target;
  if (!isNaN(target.id)) {
    stack.push(target.id);
    console.log(stack);
    updateDisplay();
  } else if (target.id === "clear") {
    stack.length = 0;
    updateDisplay();
  } else if (target.classList.contains("operator")) {
    let currentActive = gridContainer.querySelector(".toggle");
    if (currentActive && currentActive !== target) {
      currentActive.classList.remove("toggle");
    }
    const operatorMatch = stack.find(
      (operator) =>
        operators.includes(operator) && !isNaN(stack[stack.length - 1])
    );
    // do previous operation
    if (operatorMatch) {
      prepForOperate(operatorMatch, target.id);
    }
    // still choosing operator
    target.classList.toggle("toggle");
    stack.pop();
    stack.push(operatorMatch);
  }
});

// combines numbers of either side of first operator
// oh my coupling & cohesion
function prepForOperate(operator, nextOperator) {
  let opIndex = stack.indexOf(operator);
  let num1 = stack.slice(0, opIndex).join("");
  let num2 = stack.slice(opIndex + 1).join("");
  let result = operate(num1, num2, operator);
  updateDisplay(result, true);
  stack.length = 0;
  stack.push(result);
  stack.push(nextOperator);
}

function updateDisplay(num, prevOpFlag) {
  if (stack.length === 0) {
    display.textContent = "0";
  } else if (prevOpFlag === true) {
    display.textContent = num;
  } else {
    display.textContent = stack.join("");
  }
}

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
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    case "/":
      divide(num1, num2);
      break;
    case "=":
      finishOpFlag = true;
      break;
  }
}
