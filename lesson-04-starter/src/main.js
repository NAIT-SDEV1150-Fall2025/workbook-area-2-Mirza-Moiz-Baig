console.log('Lesson 04 starter loaded');

// Instructor TODO:
// 1. Simple if
const x = 5; // variable assignment
if (x > 0) {
  console.log('x is +ve(positive)');
};
// 2. if-else
// == and === both are comparison operators
// === strictly checks for the value with the correct data type
// 3 == "3", this is true
// 3 === "3", this is false
// == does not strictly check (it can consider converted types)
if (x % 2 === 0) { // this thrives on the logic that even numbers are divisible by 2.
  console.log('x is even');
} else {
  console.log('x is odd');
}
// 3. Nested if-else
if (x > 10) { // true is boolean true
  console.log('x is greater than 10');
} else if (x < 10) {
  console.log('x is less than 10');
} else {
  console.log('x is between 10 and 10');
}
// 4. while loop
let count = 3; // a counter
while (count > 0) { // count>0 is a condition
  console.log('Countdown:', count);
  count = count - 1;// decrementing by 1 // loop must have a breaking condition.
  // The above line could be written like this: (count -=1)
}
let counter = 10;
while (counter > 0) {
  console.log(counter);
  counter -= 1;
}

// first iteration: (value of count is 3) 3>0 true,countdown :3  3-1= 2
// second iteration : (value of count is 2) 2>0 true,countdown : 2 , 2-1=1
// third iteration: (value of count is 1) 1>0 true, countdown : 1, 1-1 = 0
// fourth iteration: 0>0 false
// try printing numbers from 1 to 10 using while loop

// 5. do-while loop
let i = 0;
// a do-while loop always runs atleast once even if the condition is false.
do {
  console.log('i is:', i);
  i++;
} while (i < 3);
// write a loop that prints numbers from 1 to 10.
let w = 1;
while (w <= 10) {
  console.log(w);
  w++;
};
// 6. for loop
for (let j = 0; j < 3; j++) {
  console.log(`j = ${j}`);
};

// Student TODO:
// 7. Snippet with bugs for debugging practice
// Snippet with bugs for debugging practice - uncomment when ready
/*
const num = 10;

if (num < 5) {
  console.log('num is greater than 5');
} else {
  console.log('num is 5 or less');
}

let k = 0;
while (k < 3) {
  k + 1;
	console.log(k);
}
*/
