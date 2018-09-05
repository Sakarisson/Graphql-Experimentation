import { observable } from 'mobx';
import keys from 'Helpers/keys';

class Book {
  @observable author;

  @observable title;

  localId;

  constructor({ author, title }) {
    this.author = author;
    this.title = title;
    this.localId = keys.next;
  }
}

export default Book;
