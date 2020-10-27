const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
require('dotenv').config();
const {db} = require('../models/index');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) =>{
  try{
    const user = await db.user.findOne({
      where: {id: id},
    });
    done(null, user);
  }catch(err){
    done(err);
  }
});

const GithubConfig = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "http://localhost:5000/auth/login/github/callback"
}

const GithubVerify = async (accessToken, refreshToken, profile, done) => {
  try {
    const [user] = await db.user.findOrCreate({
      where: {username: profile.username},
      defaults: {
        profileImage: profile.photos[0].value,
      }
    });
    if(user)return done(null, user);
    done(null, false);
  }
  catch (err){
    done(err);
  }
};

module.exports = () => {
  passport.use('github', new GitHubStrategy(GithubConfig, GithubVerify));
};