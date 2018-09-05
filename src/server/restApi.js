const express = require('express');
const _ = require('underscore');

const data = require('./Data');

const { books } = data;

const restApi = express.Router();

restApi.get('/', (req, res) => {
  res.json({ data: 'This is a rest API using JSON' });
});

restApi.get('/books', (req, res) => {
  res.json(books);
});

restApi.get('/books/:author', (req, res) => {
  const { params } = req;
  const { author } = params;
  const matchingBooks = _.filter(books, { author });
  res.json(matchingBooks);
});

restApi.get('/authors', (req, res) => {
  const authors = _.unique(_.pluck(books, 'author'));
  res.json(authors);
});

restApi.post('/books', (req, res, next) => {
  const { body } = req;
  const { title, author } = body;
  if (!title || !author) {
    next();
    return;
  }
  const book = { title, author };
  books.push(book);
  res.json(book);
});

module.exports = restApi;
