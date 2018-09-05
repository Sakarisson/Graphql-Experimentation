import ApolloClient from 'apollo-boost';

import {
  queryBooks,
  addBook as gqlAddBook,
} from './Queries';

class Api {
  apolloClient;

  async getBooks() {
    const query = await this.apolloClient.query({
      query: queryBooks,
    });
    const { data } = query;
    const { books } = data;
    return books;
  }

  async addBook({ title, author }) {
    const query = await this.apolloClient.mutate({
      mutation: gqlAddBook,
      variables: {
        title, author,
      },
    });
    const { data } = query;
    const { addBook } = data;
    this.addBook(addBook);
  }

  constructor() {
    this.apolloClient = new ApolloClient();
  }
}

export default Api;
