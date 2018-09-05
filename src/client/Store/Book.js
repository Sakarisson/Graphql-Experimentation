import { observable } from 'mobx';

class Book {
  @observable author;

  @observable title;

  constructor({ author, title }) {
    this.author = author;
    this.title = title;
  }
}

export default Book;
