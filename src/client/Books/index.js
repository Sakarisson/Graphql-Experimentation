import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import Store from 'Store';

import BookView from './BookView';
import AddBook from './AddBook';

const Books = ({ store }) => (
  <div className="books">
    All books:
    {store.books.map(book => <BookView book={book} key={book.localId} />)}
    <AddBook store={store} />
  </div>
);

Books.propTypes = {
  store: PropTypes.instanceOf(Store).isRequired,
};

export default observer(Books);
