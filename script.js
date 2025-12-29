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
    console.log(num1*num2);
}
multiply(3,2);
// function capitalize(string) {
//     for (let i = 0; i < string.length;) {
//         if (char)
//     }
// }
// capitalize();

textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});