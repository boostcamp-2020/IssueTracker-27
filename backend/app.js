const express = require('express');
const loaders = require('./loaders');

const app = express();
loaders(app);
if (process.env.NODE_ENV !== 'test') {
  app.listen(process.env.PORT);
}

module.exports = app;
