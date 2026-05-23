console.log('Lesson 05 starter loaded');

// 1. Selecting elements
const title = document.querySelector('#page-title');// selecting with id
const tagline = document.querySelector('.tagline');// selecting with classname
// const tagLine = document.getElementByClassName('tagline');
const heroImg = document.querySelector('#hero-img');
const heroCaption = document.querySelector('#hero-caption');
const dynamicBox = document.querySelector('#dynamic-box');
const footerNote = document.getElementById('footer-note');
const tagName = document.getElementsByTagName('h1');
// # for id, . for classname, no symbol for tagname. (only when using query selector)
// query selector selects the first ocurence of the tag.
// to select all elements with the same classname/tagname, we use querySelectorAll
// 2. textContent vs innerHTML
title.textContent = 'Here is your DOM working.';
dynamicBox.innerHTML = `<p class = "desc"> This block was
  injected using <em> innerHTML </em>. 
  It can include <strong> markup </strong>. </p>`;
// When you only need text (no markup),
//  prefer textContent over innerText (marginal performance gain)
heroCaption.textContent = 'This caption was updated using textContent.';
// 3. Attributes & styles
heroImg.setAttribute('alt', 'A replaceable sample image'); // 'alt='A replacable sample image'
heroImg.style.borderColor = `#0d6efd`;
console.warn('name');

if (!x) { // checks if x does not exist.
  console.log('x does not exist');
}

// 4. Create small helper functions for reuse
function updateText(selector, text) {
  const el = document.querySelector(selector);
  if (!el) {
    return console.warn('No element is found for', selector);
  }
  else {
    el.textContent = text;
  }
}
// 5. Use helpers to perform simple tasks

// 6. Footer text tweak (demonstrate class toggle & style change)

// Require innerHTML here to render the &copy; entity correctly


// functions intro
// function definition
function greeting() {
  console.log('Welcome to the lesson-05.');
};
// function call
greeting();

// function to add two numbers
function add(a, b) {
  return a + b;
};
let sum = add(1, 2);// function call will evaluate to the sum.
console.log(sum);
console.log(add(3, 5));

function subtract(number1, number2) {
  return number1 - number2;
}
console.log(subtract(10, 9));
// function to find square of the number
console.log(2 ** 2);
function square(n) {
  return n * n;
}
console.log(square(2));
// function to check even or odd number.
function check(num) {
  if (num % 2 === 0) {
    return ('even number');
  }
  else {
    return ('number  is odd');
  }
}
console.log(check(2));
// and / or in JS
// "&&" and symbol in JS
// "||" or symbol in JS
// function to find largest number of the 3 numbers given as an input
function largest(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

console.log(largest(5, 3, 3));
console.log(largest(12, 7, 20));
console.log(largest(4, 4, 2));
