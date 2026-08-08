import { expect, test, describe} from 'vitest';
import '../src/user-card.js'; // import  the web component definition

describe('UserCard', () => {
  test('renders with default properties', () => {
    // create an instance
    const element = document.createElement('user-card');
    document.body.appendChild(element);
    expect(element.followed).toBe(false);
    expect(element.shadowRoot.querySelector('img').getAttribute('src')).toBe('https://placehold.co/80x80/0077ff/ffffff');
    // cleanup
    document.body.removeChild(element);
})
  test('', () => {
    
  })
});
