const express = require('express');
const path = require('path');

const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();

const indexRouter = require('../routes');
const session = require('express-session');
const cors = require('cors');

const passport = require('passport');
const passportConfig = require('../config/passport');

const expressLoader = (app) => {
  process.env.ENV === 'development' &&
    app.use(
      cors({
        origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
        credentials: true,
      })
    );
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
  process.env.ENV === 'production' &&
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });
};

module.exports = expressLoader;
