import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient('/graphql');

export default WrappedComponent => props => (
  <ApolloProvider client={client}>
    <WrappedComponent {...props} />
  </ApolloProvider>
);
