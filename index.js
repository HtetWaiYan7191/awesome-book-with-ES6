import { DateTime } from './node_modules/luxon/src/luxon.js';
import Navigation from './modules/navigation.js';
import BookManager from './modules/bookManager.js';

const bookContainer = document.querySelector('.books-container');
const addBookBtn = document.getElementById('add-book');
const errorMess = document.getElementById('error-message');
const dateContainer = document.querySelector('.date-container');
const bookCollection = new BookManager();
let date = DateTime.now();
let time = DateTime.now();
time = time.toLocaleString(DateTime.TIME_SIMPLE);
date = date.toLocaleString();
dateContainer.innerHTML = `<span class="p-2 orange date-time">${date}</span>
                            <span class="p-2 orange date-time">${time}</span>`;

const showBook = () => {
  bookContainer.innerHTML = '';
  if (bookCollection.getFromLocalStorage().length < 1) {
    bookContainer.innerHTML = '<p class="text-center p-4 fs-2">There are no Books added yet</p>';
  }
  bookCollection.getFromLocalStorage().forEach((bookData, index) => {
    const addedBook = document.createElement('div');
    addedBook.classList.add('added-book-container');
    const bookName = `
            <div class="books d-flex justify-content-between align-items-center p-3">
              <div class="title-author">
                <span class="book-info">"${bookData.title}"</span>
                <span class="book-info"> by ${bookData.author}</span>
              </div>
              <button class=" text-black remove-btn">Remove</button>
            </div>
          `;
    addedBook.innerHTML = bookName;
    bookContainer.appendChild(addedBook);

    // Add event listener to dynamically created remove button

    function removeBook(index) {
      bookCollection.removeBook(index);
      showBook();
    }
    const removeButton = addedBook.querySelector('.remove-btn');
    removeButton.addEventListener('click', () => removeBook(index));
  });
};

const addBook = () => {
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  if (title === '' || author === '') {
    errorMess.textContent = 'Please make sure to fill both title and author names';
  } else {
    bookCollection.addBook(title, author);
    titleInput.value = '';
    authorInput.value = '';
    showBook();
  }
};

addBookBtn.addEventListener('click', addBook);

showBook();
Navigation();
