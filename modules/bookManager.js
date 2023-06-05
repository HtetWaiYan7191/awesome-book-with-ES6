import Books from './book.js';

export default class BookManager {
  constructor() {
    this.books = this.getFromLocalStorage();
  }

  addBook(title, author) {
    const book = new Books(title, author);
    this.books.push(book);
    this.saveToLocalStorage();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('Books', JSON.stringify(this.books));
  }

  getFromLocalStorage() {
    const storeBook = JSON.parse(localStorage.getItem('Books')) || [];
    this.books = storeBook;
    return this.books;
  }
}
