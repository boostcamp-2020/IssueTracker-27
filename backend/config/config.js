const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    host: process.env.DB_HOST,
    dialect: 'mysql'
  },
  production: {
    username: process.env.SERVER_USERNAME,
    password: process.env.SERVER_PASSWORD,
    database: process.env.SERVER_DB,
    host: process.env.SERVER_HOST,
    dialect: 'mysql'
  }
};