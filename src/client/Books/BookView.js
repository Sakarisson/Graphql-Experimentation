import React from 'react';
import PropTypes from 'prop-types';

import BookModel from 'Store/Book';

const BookView = ({ book }) => (
  <div className="book">
    <span className="book--title">{book.title}</span>
    <span> by </span>
    <span className="book--author">{book.author}</span>
  </div>
);

BookView.propTypes = {
  book: PropTypes.instanceOf(BookModel).isRequired,
};

export default BookView;
