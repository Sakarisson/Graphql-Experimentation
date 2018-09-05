const { ApolloServer, gql } = require('apollo-server-express');
const _ = require('underscore');

const data = require('./Data');

const { books } = data;

module.exports = (app) => {
  const typeDefs = gql`
    type Book {
      title: String!
      author: String!
    }

    type Query {
      books(author: String): [Book]
      authors: [String]
    }

    type Mutation {
      addBook(title: String!, author: String!): Book
    }
  `;

  const resolvers = {
    Query: {
      books: (root, args) => _.filter(books, args),
      authors: () => _.unique(_.pluck(books, 'author')),
    },
    Mutation: {
      addBook: (root, { title, author }) => {
        const newBook = { title, author };
        books.push(newBook);
        return newBook;
      },
    },
  };

  const server = new ApolloServer({ typeDefs, resolvers });

  server.applyMiddleware({ app });
};
