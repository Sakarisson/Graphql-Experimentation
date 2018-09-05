import { action, observable } from 'mobx';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

import Book from './Book';

class BookStore {
  apolloClient;

  @observable books = [];

  @action addBook({ author, title }) {
    const book = new Book({ author, title });
    this.books.push(book);
  }

  async fetchData() {
    const query = await this.apolloClient.query({
      query: gql`
        query {
          books {
            title
            author
          }
        }
      `,
    });
    const { data } = query;
    const { books } = data;

    books.forEach(book => this.addBook(book));
  }

  constructor() {
    this.apolloClient = new ApolloClient();
    this.fetchData();
  }
}

export default BookStore;
