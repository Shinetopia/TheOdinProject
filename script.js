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

// DOM Manipulation (surely there's a more efficient way to do this)
// const container = document.querySelector("#container");

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";

// container.appendChild(content);

// const moarContent = document.createElement("p");
// moarContent.style.color = "red";
// moarContent.textContent = "Hey I'm red!";

// container.appendChild(moarContent);

// const header = document.createElement("h3");
// header.style.color = "blue";
// header.textContent = "I'm a blue h3!";

// container.appendChild(header);

// const container2 = document.createElement("div");
// container2.setAttribute(
//   "style",
//   "border: 2px solid black; background-color: pink;"
// );
// const content2 = document.createElement("h1");
// content2.textContent = "I'm in a div";
// container2.appendChild(content2);
// const content3 = document.createElement("p");
// content3.textContent = "ME TOO!";
// container2.appendChild(content3);
// container.appendChild(container2);

// function alertFunction() {
//   alert("YAY YOU DID IT!");
// }
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", function (e) {
//   // console.log(e.target);
//   e.target.style.background = "blue";
// });

// MDN DOM
const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";
const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);
const text = document.createTextNode(
  " — the premier source for web development knowledge."
);
const linkPara = document.querySelector("p");
linkPara.appendChild(text);
// sect.removeChild(linkPara);
linkPara.parentNode.removeChild(linkPara);
para.classList.add("highlight");

// Objects have an optional list of properties (key: value pair), key = property name
// Map to names
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// let names = users.map((item) => item.name);

// console.log(names); // John, Pete, Mary

// Map to objects
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let usersMapped = users.map((user) => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id,
// }));
// alert(usersMapped[0].id); // 1
// alert(usersMapped[0].fullName); // John Smith

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [pete, john, mary];

// alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// function getAverageAge(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i].age;
//   }
//   return Math.round(sum / arr.length);
//   // return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

// sortByAge(arr);

// function sortByAge(users) {
//   users.sort((a, b) => a.age - b.age);
// }
// now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

// let usersById = groupById(users);
console.log(groupById(users));

function groupById(users) {
  return users.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
