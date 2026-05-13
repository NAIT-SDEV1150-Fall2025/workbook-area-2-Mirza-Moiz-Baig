console.log('Lesson 03 starter load');
// 1. Declare variables using var, let, const
const greeting = "Hello, World!";
let count = 3.0;
var name = true;//Boolean
console.log(name, count, greeting);
// 2. Log their types with console.log(typeof …)
console.log('Type of greeting:', typeof greeting);
// 3. Try built-in functions: alert(), prompt(), parseInt(), toString()
alert("Welcome to the demo.");
const userName = prompt('Enter your name:');
const continueDemo = confirm(`Hi ${userName} , shall we continue the demo?`);
console.log('User chose to confirm', continueDemo);
const strNumber = '42';
const parsedNumber = parseInt(strNumber,10);
console.log(`Parsed "${strNumber}" to number: ${parsedNumber}`);
const actualString = parsedNumber.toString();
console.log(actualString);

// 4. Manipulate values and observe results in the console

// Student TODO:
// Prompt the user for their name and age
// Log a greeting message using the provided name and age
