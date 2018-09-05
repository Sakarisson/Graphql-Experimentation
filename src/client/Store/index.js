import { action, observable } from 'mobx';
import Book from './Book';

class BookStore {
  @observable books = [];

  @action addBook({ author, title }) {
    const book = new Book({ author, title });
    this.books.push(book);
  }
}

export default BookStore;
