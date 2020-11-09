const express = require('express');
const path = require('path');
const passport = require('passport');
const passportConfig = require('./config/passport');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const { sequelize } = require('./models');
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const allDataRouter = require('./routes/allData');
const issueRouter = require('./routes/issue');
const session = require('express-session');
const cors = require('cors');

const app = express();
process.env.ENV === 'development' &&
  app.use(
    cors({
      origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
      credentials: true,
    })
  );

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('DB 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(passport.initialize());
app.use(passport.session());
passportConfig();

app.use('/api', indexRouter);
app.use('/api/auth', authRouter);
app.use('/api/issue', issueRouter);
app.use('/api/allData', allDataRouter);

process.env.ENV === 'production' &&
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

app.listen(process.env.PORT);
