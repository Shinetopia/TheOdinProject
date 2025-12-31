// function showMessage(from, text = "no text given") {
//   alert( from + ": " + text );
// }

// showMessage("Ann"); // Ann: no text given
// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('Do you have permission from your parents?');
//   }
// }

// let age = prompt('How old are you?', 18);

// if ( checkAge(age) ) {
//   alert( 'Access granted' );
// } else {
//   alert( 'Access denied' );
// }

function add7(num) {
  console.log(num + 7);
}
add7(10);
function multiply(num1, num2) {
  console.log(num1 * num2);
}
multiply(3, 2);

function capitalize(string) {
  uppered = string[0].toUpperCase() + string.slice(1).toLowerCase();
  console.log(uppered);
}
capitalize("abcd");

function lastletter(string) {
  // console.log(string[string.length - 1]);
  console.log(string.slice(-1));
}
lastletter("abcd");

function isCapital(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i].toUpperCase()) {
      console.log(string[i]);
      return;
    }
  }
  console.log(string + " has no capital letters");
}
isCapital("a");

// fireworks countdown
const fireworksOutput = document.querySelector(".fireworks");
fireworksOutput.textContent = "";

for (let i = 10; i > -1; i--) {
  const para = document.createElement("p");
  para.textContent = i;
  if (i === 10) {
    para.textContent = `Countdown ${i}`;
  } else if (i === 0) {
    para.textContent = "Happy New Year!!!";
  }
  fireworksOutput.appendChild(para);
}

// black list filtering, Phil & Lola
const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

// for (const item of array) {
for (const person of people) {
  if (person === "Phil" || person === "Lola") {
    refused.textContent += person + ", ";
  }
  admitted.textContent += person + ", ";
  // admitted.textContent += `{person}, `;
}
refused.textContent = `${refused.textContent.slice(0, -2)}.`;
admitted.textContent = `${admitted.textContent.slice(0, -2)}.`;

// repeat until input is > 100
let numGuess;
do {
  num = prompt("Enter a num greater than 100", 0);
} while (num <= 100 && num);
