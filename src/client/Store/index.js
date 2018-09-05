import { action, observable } from 'mobx';

import Api from './Api';
import Book from './Book';

class BookStore {
  api;

  @observable books = [];

  @action addBook(book) {
    if (!(book instanceof Book)) {
      this.books.push(new Book(book));
    } else {
      this.books.push(book);
    }
  }

  async init() {
    const books = await this.api.getBooks();
    books.forEach(book => this.addBook(book));
  }

  constructor() {
    this.api = new Api();
    this.init();
  }
}

export default BookStore;
