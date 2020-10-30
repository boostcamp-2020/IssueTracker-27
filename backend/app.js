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
const issuesRouter = require('./routes/issues');
const issueRouter = require('./routes/issue');
const session = require('express-session');
const cors = require('cors');

const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
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
    cookie: { secure: process.env.ENV === 'development' ? false : true },
  })
);
app.use(passport.initialize());
app.use(passport.session());
passportConfig();

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/issue', issueRouter);
app.use('/issues', issuesRouter);

process.env.ENV === 'production' &&
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

app.listen(process.env.PORT);
