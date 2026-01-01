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
// let numGuess;
// do {
//   num = prompt("Enter a num greater than 100", 0);
// } while (num <= 100 && num);

// sum every tripled even
// const numArray = [1, 2, 3, 4, 5];
// const filteredArray = numArray.filter((num) => num % 2 == 0);
// const tripledArray = filteredArray.map((num) => num * 3);
// const sumOfTripledEvens = tripledArray.reduce((total, currentItem) => {
//   return total + currentItem;
// });
// console.log(sumOfTripledEvens);

function sumOfTripledEvens(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}
console.log(sumOfTripledEvens([1, 2, 3, 4, 5]));

//translate border-left-width to borderLeftWidth
function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}
console.log(camelize("-webkit-transition"));

// function filterRange(arr, a, b) {
//   return arr.filter((num) => num > a && num <= b);
// }
// console.log(filterRange([5, 3, 8, 1], 2, 6));

// keep if a <= item <=b
function filterRangeInPlace(arr, a, b) {
  let i = 0;
  while (i < arr.length) {
    if (b < arr[i] || arr[i] < a) {
      arr.splice(i, 1);
    }
    i++;
  }
  console.log(arr);
}
filterRangeInPlace([5, 3, 8, 1], 5, 8);

// let randomArr = [5, 2, 1, -10, 8];
// randomArr.reverse();
// console.log(randomArr);
// or same thing: arr.sort((a, b) => b - a);

function copySorted(arr) {
  return arr.slice().sort();
}
console.log(copySorted(["HTML", "JavaScript", "CSS"]));

// Fisher-Yates shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function unique(arr) {
  let uniqueArr = [];
  for (const item of arr) {
    if (!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  }
  return uniqueArr;
}
console.log(
  unique([
    "Hare",
    "Krishna",
    "Hare",
    "Krishna",
    "Krishna",
    "Krishna",
    "Hare",
    "Hare",
    ":-O",
  ])
);
