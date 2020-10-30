const express = require('express');
const passport = require('passport');
const router = express.Router();
require('dotenv').config();
const BASE_URL = require('../config/config')[process.env.ENV];

router.get('/login/success', (req, res) => {
  if (req.user) {
    const { username, id, profileImage } = req.user;
    return res.status(200).json({
      message: '로그인 성공',
      user: { id, username, profileImage },
    });
  }
  return res.status(400).json({
    message: '로그인 실패',
  });
});

router.get('/logout', (req, res) => {
  req.logout();
  req.clearCookie('connect.sid');
  res.status(200).json({ message: '로그아웃 되었습니다.' });
});

// GITHUB AUTHENTICATION
router.get('/login/github', passport.authenticate('github'));

router.get(
  '/login/github/callback',
  passport.authenticate('github', {
    successRedirect: '/main',
    failureRedirect: '/',
  })
);

module.exports = router;
