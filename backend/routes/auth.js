const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('../controllers/auth.js');

router.get('/login/github', passport.authenticate('github'));

router.get('/login/github/callback', 
  passport.authenticate('github', {failureRedirect: '/'}), 
  (req, res) => {
    res.redirect('/');
  }
);

module.exports = router;
