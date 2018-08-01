var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');
var users = require('../models/users');

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(new LocalStrategy(function (username, password, done) {
    let user = users.findByUsername(username, function (err, user) {
        if (err || !user) {
            return done(null, false, { message: 'Incorrect username.' });
        }
        bcrypt.compare(password, user.passwordHash, function (err, res) {
            if (!res) {
                return done(null, false, { message: 'Incorrect password.' });
            } else {
                return done(null, user);
            }
        });
    });

}));

router.get('/login', function (req, res, next) {
    res.render('login', { loginMessage: req.flash('error') });
});

router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/admin',
        failureRedirect: '/login',
        failureFlash: true
    })
);

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;