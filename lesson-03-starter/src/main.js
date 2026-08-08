console.log('Lesson 03 starter load');
// 1. Declare variables using var, let, const
const greeting = "Hello, World!";
let count = 3.0;
var name = true;//Boolean
console.log(name, count, greeting);
// 2. Log their types with console.log(typeof …)
console.log('Type of greeting:', typeof greeting);
// 3. Try built-in functions: alert(), prompt(), parseInt(), toString()
//alert("Welcome to the demo.");
const userName = prompt('Enter your name:');
//const continueDemo = confirm(`Hi ${userName} , shall we continue the demo?`);
//console.log('User chose to confirm', continueDemo);
const strNumber = '42';
const parsedNumber = parseInt(strNumber,10);
console.log(`Parsed "${strNumber}" to number: ${parsedNumber}`);
const actualString = parsedNumber.toString();
console.log(actualString);

// 4. Manipulate values and observe results in the console
let x = 10;
let y = 5;
console.log (`${x} + ${y} =`,x + y);
console.log (`${x} - ${y} =`,x - y);
console.log (`${x} * ${y} =`,x * y);
console.log (`${x} / ${y} =`,x / y);

x = x + 1 ; // add one and assign it back to x 
x += 1 ;// same thing as above
x++ ; //same as above
x = x - 1 ;
x -= 1 ; // subtract from 1 and assign back to x 
x *= 1; // multiply with 1 and assign back to x 
console.log(x);

10 % 3;   // 1 (remainder) modulo

// Increment / Decrement
let c = 5; c++; // 6
let d = 5; d--; // 4

// Assignment Operators
let a = 10;     // assign 10
a += 5;         // 15
a -= 3;         // 12
a *= 2;         // 24
a /= 4;         // 6
a %= 4;         // 2
//composite data types
// array
const fruits = ["apple","banana","cherry"];//square brackets with commas identify arrays in js 
const numbers = [1,2,3];
const mix = [1,"name",true];
// object
//comprises of key value pairs
const moiz = "Moiz"
const person = {1.0:moiz, 
    2.0:"age", 
    3.0:"height"
}// curly brackets are identifying a object
// 1:"name" 1 is the key and "name" is the value
// can have any primitive/composite data type in keys/values
const PERSON = {
    name:"Moiz",
    age:"25",
    height:'6" 2"',
    weight: "82kg"
};
console.log(PERSON.name(),person);
const PERSON_NAME = { name: 'Alex', age: 30 }; // const usually uses screaming snakecase.
// Student TODO:
// Prompt the user for their name and age
// Log a greeting message using the provided name and age
