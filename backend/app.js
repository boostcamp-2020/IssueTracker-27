const express = require('express');
const loaders = require('./loaders');

const startServer = () => {
  const app = express();
  loaders(app);
  app.listen(process.env.PORT);
};

startServer();
