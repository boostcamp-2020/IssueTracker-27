const express = require('express');
const path = require('path');
const passport = require('passport');
const passportConfig = require('./config/passport');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const {sequelize} = require('./models');
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');

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
app.use(passport.initialize());
passportConfig();

app.use('/', indexRouter);
app.use('/auth', authRouter);

app.listen(process.env.PORT);
