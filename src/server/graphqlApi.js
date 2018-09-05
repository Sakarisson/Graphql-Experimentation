const { ApolloServer, gql } = require('apollo-server-express');
const data = require('./Data');

const { books } = data;

module.exports = (app) => {
  const typeDefs = gql`
    type Book {
      title: String
      author: String
    }

    type Query {
      books: [Book]
    }
  `;

  const resolvers = {
    Query: {
      books: () => books,
    },
  };

  const server = new ApolloServer({ typeDefs, resolvers });

  server.applyMiddleware({ app });
};
