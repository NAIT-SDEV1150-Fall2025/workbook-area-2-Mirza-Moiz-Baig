console.log('Lesson 08 starter loaded');

// 1. load event (document ready) - NOTE this is unnecessary if using `defer` in the script tag or using module type
window.addEventListener('DOMContentLoaded', () => { // (type of the event, ()=>{})
  console.log('DOM fully loaded');
  // add your DOM logic and event listeners here
});
// 2. Selecting elements
const btnToggle = document.querySelector('#btn-toggle');
const btnMessage = document.getElementById('btn-message');
const message = document.getElementById('message');
const hoverCard = document.querySelector('#hover-card');
const hoverStatus = document.querySelector('#hover-status');
const keyOutput = document.getElementById('key-output');
const list = document.querySelector('#list');
const selection = document.getElementById('selection');

// 3. click: toggle a highlight class on the body
btnToggle.addEventListener('click', () => {
  console.log('button is clicked');
});
btnToggle.addEventListener('click', () => {
  document.body.classList.toggle('highlight');// toggle turns the highlight on and off every time the button is clicked
  const on = document.body.classList.contains('highlight');// contains checks if highlight is there as a class or not returns true/false based on highlight class being there or not.
  btnToggle.textContent = on ? 'Highlight is on' : 'highlight is off';// ternary operator checks if the value of variable on is true or not, if true returns the first entry (the one before the column)
});
// 4. click: change message textContent (no HTML parsing)
btnMessage.addEventListener('click', () => {
  const timeString = new Date().toLocaleTimeString();// saves the current time as a string
  message.textContent = `Message updated at ${timeString}`;
});
// 5. mouseover / mouseout: display hover status on the card
hoverCard.addEventListener('mouseover', () => {
  hoverStatus.textContent = 'Status: Hovering';
});
hoverCard.addEventListener('mouseout', () => {
  hoverStatus.textContent = 'not Hovering';
});
// 6. keydown: show last key pressed (global listener)
document.addEventListener('keydown', (e) => { // indicating the use of event object
  keyOutput.textContent = `Last key: ${e.key} (code: ${e.code})`;
});
// 7. Event delegation: one listener on the <ul> for all <li> elements
list.addEventListener('click', (event) => {
  const element = event.target; // event.target refers to the particular element that was clicked
  const tag = element.tagName; // same as event.target.tagName
  // tagName displays the name of the tag in uppercase
  console.log(tag);
  if (tag === 'LI') {
    const prev = event.target.querySelector('li.active');
    // remove existing styles
    if (prev) {
      prev.classList.remove('active');
    }
    event.target.classList.add('active');// add styles to the particular event that is clicked
    const id = event.target.getAttribute('data-id');
    selection.textContent = `Selected : Item ${id}`;
  } // is the click on li tag (true) or not (false)
});
