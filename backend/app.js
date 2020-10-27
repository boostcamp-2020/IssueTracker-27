const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const sequelize = require('./models');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

sequelize
  .sync({ force: true })
  .then(() => {
    console.log('DB 연결 성공');
  })
  .catch(err => {
    console.error(err);
  });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(process.env.PORT);
