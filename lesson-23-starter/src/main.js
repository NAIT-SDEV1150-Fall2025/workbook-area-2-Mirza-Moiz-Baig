// Import the user-card component to register the custom element
import './user-card.js';

const users = [
  { id: 'u1', name: 'Zelda', avatar: 'assets/zelda-avatar.png', description: 'Princess of Hyrule' },
  { id: 'u2', name: 'Link', avatar: 'assets/link-avatar.png', description: 'Hero of Hyrule' },
  { id: 'u3', name: 'Mipha', description: 'Zora Champion' },
];

// Theme toggle button logic
let dark = false;
const toggleBtn = document.querySelector('#btn-theme');
toggleBtn.addEventListener('click', () => {
  dark = !dark;
  document.documentElement.style.setProperty('--global-card-bg', dark ? '#1f2937' : '#ffffff');
  document.documentElement.style.setProperty('--global-card-color', dark ? '#e5e7eb' : '#222222');
  document.documentElement.style.setProperty('--global-card-accent', dark ? 'gold' : '#0077ff');
  toggleBtn.textContent = dark ? '☀️' : '🌙';
});

const main = document.querySelector('main');
users.forEach((each_user) => {
  const card = document.createElement('user-card'); //  creating <user-card> initializes the shadowdom
  card.user = each_user; // setter is running
  // setter triggers setuser(obj) --> _renderFromUser
  main.appendChild(card);
  // add each card to the main page
  // ConnectedCallback now fires when element is added to the main DOM
  // Setter will cause the values to be extracted
  // Add the card to the page
  // connected Callback now fires
});

let followedCount = 0;

main.addEventListener('follow-change', (event) => {
  followedCount += event.detail.followed ? 1 : -1;
  const counterEl = document.querySelector('#follow-counter');
  counterEl.textContent = `Followed: ${followedCount}`;
  console.log('follow change', event.detail);
});

