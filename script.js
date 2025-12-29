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

// textBox.addEventListener("keydown", function (event) {
//   console.log(`You pressed "${event.key}".`);
// });
