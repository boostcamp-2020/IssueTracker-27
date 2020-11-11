const express = require('express');
const passport = require('passport');
const router = express.Router();
require('dotenv').config();
const BASE_URL = require('../config/urlconfig')[process.env.ENV];
const AuthController = require('../controllers/auth');

router.get('/login/success', AuthController.checkLoginSuccess);
router.get('/logout', AuthController.logout);

router.get('/login/github', passport.authenticate('github'));
router.get(
  '/login/github/callback',
  passport.authenticate('github', {
    successRedirect: `${BASE_URL.client}/`,
    failureRedirect: '/',
  })
);

module.exports = router;
