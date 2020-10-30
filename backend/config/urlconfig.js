require('dotenv').config();

module.exports = {
  development: {
    server: 'http://localhost:5000',
    client: 'http://localhost:3000',
  },
  production: {
    server: 'http://118.67.130.104:5000',
    client: 'http://118.67.130.104:5000',
  },
};
