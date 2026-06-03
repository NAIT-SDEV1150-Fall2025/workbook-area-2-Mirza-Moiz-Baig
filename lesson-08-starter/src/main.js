console.log('Lesson 08 starter loaded');

// 1. load event (document ready) - NOTE this is unnecessary if using `defer` in the script tag or using module type
window.addEventListener('DOMContentLoaded', () => { // (type of the event, ()=>{})
  console.log('DOM fully loaded');
  // add your DOM logic and event listeners here
});
// 2. Selecting elements
const btnToggle = document.querySelector('#btn-toggle');
btnToggle.addEventListener('click', () => {
  console.log('button is clicked');
});
btnToggle.addEventListener('click', () => {
  document.body.classList.toggle('highlight');
  const on = document.body.classList.contains('highlight');// contains checks if highlight is there as a class or not returns true/false based on highlight class being there or not.
  btnToggle.textContent = on ? 'Highlight is on' : 'highlight is off';
});
// 3. click: toggle a highlight class on the body

// 4. click: change message textContent (no HTML parsing)

// 5. mouseover / mouseout: display hover status on the card

// 6. keydown: show last key pressed (global listener)

// 7. Event delegation: one listener on the <ul> for all <li> elements
