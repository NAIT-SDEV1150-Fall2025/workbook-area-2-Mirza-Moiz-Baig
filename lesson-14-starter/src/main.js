import dayjs from 'dayjs';
import { greetUser } from './utils'; // importing function from utils.js
import utils from './utils'; // imports the default name 
// utils can be anyname you like
const currentDate = dayjs().format('dddd, MMMM D, YYYY');
document.querySelector('#today').textContent = `Today is ${currentDate}`;
const userName = prompt('Enter your name:');
const message = greetUser(userName || utils.defaultName);
document.querySelector('#greeting').textContent = `${message}`;
