const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('../controllers/auth.js');

router.get('/login/github', passport.authenticate('github'));

router.get('/login/github/callback', 
  passport.authenticate('github', {successRedirect: 'http://localhost:3000/main', failureRedirect: '/'})
);

module.exports = router;
