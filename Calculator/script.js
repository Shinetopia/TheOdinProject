let num1 = "";
let operator = "";
let num2 = "";
const gridContainer = document.querySelector(".grid-container");
const display = document.querySelector("#display-content");

gridContainer.addEventListener("click", (event) => {
  let target = event.target;
  if (!isNaN(target.id)) {
    if (operator === "") {
      num1 += target.id;
      updateDisplay(num1);
      console.log("num1: " + num1);
    } else {
      num2 += target.id;
      updateDisplay(num2);
      console.log("num2: " + num2);
    }
  } else if (target.id === "clear") {
    num1 = "";
    num2 = "";
    operator = "";
    updateDisplay(0);
  } else if (target.classList.contains("operator") || target.id === "equal") {
    if (num1 !== "" && num2 !== "" && operator !== "") {
      let result = operate(Number(num1), Number(num2), operator);
      updateDisplay(result);
      num1 = result;
      num2 = "";
    }
    // if operator
    if (target.id !== "equal") {
      operator = target.id;
    }
  }
  //     operator = target.id;
  //     let currentActive = gridContainer.querySelector(".toggle");
  //     console.log(operator);
  //     if (currentActive && currentActive !== target) {
  //       currentActive.classList.remove("toggle");
  //     }
  //     target.classList.toggle("toggle");
  //   }
});

function updateDisplay(num) {
  display.textContent = num;
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
    case "add":
      return add(num1, num2);
    case "subtract":
      return subtract(num1, num2);
    case "multiply":
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
  }
}
