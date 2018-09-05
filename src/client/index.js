import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import withApolloProvider from 'HOC/withApolloProvider';

import ReactDOM from 'react-dom';
import 'babel-polyfill';

import Store from 'Store';

import Books from './Books';

const instance = new Store();

const App = ({ store }) => (
  <div>
    Welcome to React, Webpack4, Mobx, Express starter kit.
    <Books books={store.books} />
  </div>
);

App.propTypes = {
  store: PropTypes.instanceOf(Store).isRequired,
};

const AppWithProviders = compose(
  withApolloProvider,
)(App);

ReactDOM.render(<AppWithProviders store={instance} />, document.getElementById('root'));

export default AppWithProviders;
