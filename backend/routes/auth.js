const express = require('express');
const passport = require('passport');
const router = express.Router();
require('dotenv').config();
const BASE_URL = require('../config/urlconfig')[process.env.ENV];
const { db } = require('../models/index');

const ISSUETRACKER_ID = 1;

router.get('/login/success', async (req, res) => {
  if (req.user) {
    const userInfo = await db.user.findOne({
      where: { id: req.user.id },
      attributes: ['id', 'username', 'profileImage'],
      include: {
        model: db.joinUser,
        where: { issueTrackerId: ISSUETRACKER_ID },
        attributes: ['id'],
      },
    });

    return res.status(200).json({
      message: '로그인 성공',
      user: userInfo,
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
    successRedirect: `${BASE_URL.client}/`,
    failureRedirect: '/',
  })
);

module.exports = router;
