const express = require('express');
const data = require('./Data');

const { books } = data;

const restApi = express.Router();

restApi.get('/', (req, res) => {
  res.json({ data: 'This is a rest API using JSON' });
});

restApi.get('/books', (req, res) => {
  res.json(books);
});

module.exports = restApi;
