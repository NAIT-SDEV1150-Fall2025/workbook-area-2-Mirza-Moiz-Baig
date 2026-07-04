// Import the functions necessary to make the API calls
import { fetchData, postData } from './utils';
// Select the necessary DOM elements
const loadButton = document.getElementById('loadBooks');
const addForm = document.getElementById('addBook');
const list = document.getElementById('bookList');
// Define the API endpoint
const endpoint = 'http://localhost:3000/books';
// Define a function to handle loading and displaying the list of books
async function loadHandler() {
  list.innerHTML = '<li> Loading...</li>';
  try {
    const books = await fetchData(endpoint);
    list.innerHTML = '';

    books.forEach((book) => {
      const li = document.createElement('li');
      li.textContent = ` ${book.title} by ${book.author}`;
      list.appendChild(li);
    });
  }
  catch (error) {
    list.innerHTML = `<li style = "color:red;"> Error : ${error.message}</li>`;
  }
}
loadButton.addEventListener('click', loadHandler);
// Define a function to handle form submission for adding a new book
async function submitHandler(e) {
  e.preventDefault();// never reload the webpage
  const form = e.target; // For Submit event, e.target refers to form
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  data['year'] = Number(data.year); // convert year to number
  try {
    await postData(endpoint, data);
    loadHandler();
  }
  catch (error) {
    console.error('Error submitting form:', error);
  }
}
// Attach event listeners to the button and form
addForm.addEventListener('submit', submitHandler);
// TODO: Add delete functionality
