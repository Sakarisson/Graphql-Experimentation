import React from 'react';
import PropTypes from 'prop-types';

import withLogic from './withLogic';

const AddBook = ({
  form: {
    title,
    author,
  },
  handleSubmit,
  handleFormChange,
}) => (
  <div>
    Add new book:
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title:
        <input type="text" name="title" id="title" value={title} onChange={handleFormChange} />
      </label>
      <label htmlFor="author">
        Author:
        <input type="text" name="author" id="author" value={author} onChange={handleFormChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
);

AddBook.propTypes = {
  form: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFormChange: PropTypes.func.isRequired,
};

export default withLogic(AddBook);
