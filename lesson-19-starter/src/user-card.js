class UserCard extends HTMLElement {
  constructor() {
    super(); // Inherit the constructor of the parent
    const shadow = this.attachShadow({ mode: 'open'});
    const template = document.getElementById('user-card-template');
    const content = template.content.cloneNode(true);
    const img = content.querySelector('img');
    img.src = this.getAttribute('avatar') || 'https://placehold.co/80x80';
    shadow.appendChild(content);
  }
}
customElements.define('user-card', UserCard); // registers my user-card component with the webpage.

export default UserCard;
