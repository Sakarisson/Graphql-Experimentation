import React from 'react';
import PropTypes from 'prop-types';
import {
  observer,
  PropTypes as MobxPropTypes,
} from 'mobx-react';

import BookModel from 'Store/Book';

import BookView from './BookView';

const Books = ({ books }) => (
  <div className="books">
    {books.map(book => <BookView book={book} key={book.localId} />)}
  </div>
);

Books.propTypes = {
  books: MobxPropTypes.observableArrayOf(PropTypes.instanceOf(BookModel)),
};

Books.defaultProps = {
  books: [],
};

export default observer(Books);
