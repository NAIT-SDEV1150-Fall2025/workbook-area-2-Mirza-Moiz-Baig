console.log('Lesson 10 starter loaded');

// ============== Propagation demo
// 1. Select requireded elements
const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const button = document.getElementById('btn-propagate');
const log = document.getElementById('log');
// 2. Add event listeners
function outerClick() {
  log.textContent += 'Outer div is clicked |';
}

// 2.1 Outer div - using a named function
outer.addEventListener('click', outerClick);
// 2.2 Inner div - using an anonymous function
inner.addEventListener('click', function () {
  log.textContent += 'Inner div is clicked |';
});
// 2.3 Button - using an arrow function
button.addEventListener('click', () => {
  log.textContent += 'Button is clicked |';
});
// ============== Gallery demo

// 1. Select required elements
const thumbNails = document.querySelector('.thumbnails');
const mainImage = document.getElementById('main-image');
const viewer = document.querySelector('.viewer');
const closeBtn = document.getElementById('close-viewer');
// 2. Add event listeners

// 2.1 Thumbnails container - using an arrow function
thumbNails.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    mainImage.src = e.target.src;
    viewer.classList.add('show');
  }
});
// 2.2 Close button - using an arrow function
closeBtn.addEventListener('click', () => {
  viewer.classList.remove('show');
});
// Student TODO: Add event listener to document, which closes
// the viewer when the Escape key is pressed


// object/ list destructuring
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);

let colors = ['red', 'green', 'blue', 'black', 'white'];
[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);
const color = ['white', 'green', 'blue', 'black', 'red'];
const [first, second, third, ...extraColors] = color;
console.log(extraColors);
console.log(first);
console.log(second);
console.log(third);

const person1 = {
  name: 'SpongeBob',
  gender : 'male',
  age : '40'

};
const person2 = {
  name: 'SquarePants',
  gender: 'female',
  age: '30'
};
console.log(person2.age);

const {name, age, gender} = person2; // object destructuring
console.log(name);
console.log(age);
console.log(gender);
// function displayPerson(name, age, gender){

// }
// displayPerson(name, age, gender);
console.log(thumbNails);
console.log(mainImage);
