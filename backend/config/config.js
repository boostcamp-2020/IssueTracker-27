const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
  production: {
    username: process.env.SERVER_USERNAME,
    password: process.env.SERVER_PASSWORD,
    database: process.env.SERVER_DB,
    host: process.env.SERVER_HOST,
    dialect: 'mysql',
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
  common: {
    timezone: '+09:00',
    dialectOptions: {
      useUTC: true, // for reading from database
      dateStrings: true, // ! 데이터 로드시 문자열로 가저옴
      typeCast: true, // ! 타임존을 역으로 계산하지 않음
    },
  },
};
