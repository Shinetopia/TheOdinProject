const num1 = 0;
const operator = 0;
const num2 = 0;
let finishOpFlag = false;
let displayContent = [];
const gridContainer = document.querySelector(".grid-container");
const display = document.querySelector("#display-content");

gridContainer.addEventListener("click", (event) => {
  let target = event.target;
  if (!isNaN(target.id)) {
    displayContent.push(target.id);
    console.log(displayContent);
    updateDisplay();
  }
  switch (target.id) {
    case "clear":
      displayContent.length = 0;
      updateDisplay();
      break;
  }
});

function updateDisplay() {
  if (displayContent.length === 0) {
    display.textContent = "0";
  } else {
    display.textContent = displayContent.join("");
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
