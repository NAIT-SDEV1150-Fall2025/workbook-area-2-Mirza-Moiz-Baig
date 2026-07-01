// Import the functions necessary to make the API calls
import { fetchData, postData } from "./utils";
// Select the necessary DOM elements
const loadButton = document.getElementById('loadBooks');
const addForm = document.getElementById('addBook');
const list = document.getElementById('bookList');
// Define the API endpoint
const endpoint = 'http://localhost:3000/books';
// Define a function to handle loading and displaying the list of books
async function loadHandler() {
  try {
    const books = await fetchData(endpoint);
  }
  catch (error) {

  }
}
// Define a function to handle form submission for adding a new book

// Attach event listeners to the button and form

// TODO: Add delete functionality
