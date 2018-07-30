var express = require('express');
var router = express.Router();
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

const user = {
  username: 'test-user',
  passwordHash: 'bcrypt',
  id: 1
}

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new LocalStrategy(function(username, password, done) {
  if (username !== user.username) {
    return done(null, false, { message: 'Incorrect username.'});
  }
  if (password !== user.passwordHash) {
    return done(null, false, { message: 'Incorrect password.'});
  }
  return done(null, user);
}));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/login', function (req, res, next) {
  res.render('login', { loginMessage: req.flash('error') });
});

router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
);

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('profile');
});

module.exports = router;
