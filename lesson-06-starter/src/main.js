console.log('Lesson 06 starter loaded');

// Selecting elements
const titleEl = document.querySelector('#page-title');
const taglineEl = document.querySelector('.tagline');// query selector selects the first occurence only
const heroImg = document.querySelector('#hero-img');
const heroCaption = document.querySelector('#hero-caption');
const dynamicBox = document.querySelector('#dynamic-box');
const footerNote = document.querySelector('#footer-note');

// 1. Create a new variable for the feature list element
const featureList = document.getElementById('feature-list');

// 3. Modify list content
const li = document.createElement('li');// <li></li>
li.className = 'feature';// <li class = 'feature'></li>
li.textContent = 'Flexible';// <li class = 'feature'>Flexible</li>
// 4. Add a new item dynamically
featureList.appendChild(li);// This adds the child "li" to the html document

// 2. Add feature list to the displayed elements below
console.log('Selected elements:', {
  titleEl, taglineEl, heroImg, heroCaption, dynamicBox, footerNote,
});

// 5. Retreive all list items (querySelectorAll) and update their text
const features = document.querySelectorAll('.feature');
console.log(features);
features.forEach((li, idx) => {
  li.textContent = `${idx + 1}. ${li.textContent}`;
}
);
// ()=>{} arrow functions are not named and usually limited to a particular block of code

// 6. Removing the first item from the list using DOM relationships to find it
// .removeChild: removes the element from the children of the parent node

featureList.removeChild(featureList.firstElementChild);

// 7. Update the second item using nextElementSibling
featureList.firstElementChild.nextElementSibling.textContent += `(updated)`;
// 8. Move the last item to the front of the list
const last = featureList.removeChild(featureList.lastChild);
// insertBefore(<the element to be inserted, the location where you want to insert)
featureList.insertBefore(last, featureList.firstChild);

// 9. Use a timer to add a new item after 3 seconds have passed
setTimeout(() => {
  const newElement = document.createElement('li');
  newElement.className = 'feature';
  newElement.textContent = `added after 3 secs`;
  featureList.appendChild(newElement);
}, 3000);// 3000 miliseconds = 3 secs.
// **** THE FOLLOWING IS EXISTING CODE FROM LESSON 05

// textContent vs innerHTML
titleEl.textContent = 'DOM: Your JavaScript Window into Page Structure';

dynamicBox.innerHTML = `
  <p class="desc">
    This block was injected with <em>innerHTML</em>. It can include <strong>markup</strong>.
  </p>
`;

heroCaption.textContent = 'This caption was updated using textContent.';

// Attributes & styles
heroImg.setAttribute('alt', 'A replaceable sample image');
heroImg.style.borderColor = '#0d6efd';

// Create small helper functions for reuse
function updateText(selector, text) {
  const el = document.querySelector(selector);
  if (!el) return console.warn('No element found for', selector);
  el.textContent = text;
}

function updateHTML(selector, html) {
  const el = document.querySelector(selector);
  if (!el) return console.warn('No element found for', selector);
  el.innerHTML = html;
}

// Use helpers to perform simple tasks
updateText('.tagline', 'Selecting, reading, and modifying nodes with JavaScript.');
updateHTML('#dynamic-box', `
  <p class="desc">
    Replaced again via <code>updateHTML()</code>. Notice how we can inject different markup here.
  </p>
`);

// Footer text tweak (demonstrate class toggle & style change)
footerNote.classList.add('footer-strong');
// Require innerHTML here to render the &copy; entity correctly
footerNote.innerHTML = '&copy; 2025 Front End Fundamentals';
