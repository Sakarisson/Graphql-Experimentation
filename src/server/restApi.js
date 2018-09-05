const express = require('express');

const restApi = express.Router();

restApi.get('/', (req, res) => {
  res.json({ data: 'This is a rest API using JSON' });
});

module.exports = restApi;
