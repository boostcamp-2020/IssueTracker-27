const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
require('dotenv').config();
const {db} = require('../models/index');

const GithubConfig = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "http://localhost:5000/auth/login/github/callback"
}

const GithubVerify = (accessToken, refreshToken, profile, cb) => {
  db.user.findOrCreate({
    where: {username: profile.username},
    defaults: {
      profileImage: profile.photos[0].value,
    }
  });
};

module.exports = () => {
  passport.use('github', new GitHubStrategy(GithubConfig, GithubVerify));
};