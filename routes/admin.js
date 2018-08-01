var express = require('express');
var router = express.Router();


router.get('/',
  require('connect-ensure-login').ensureLoggedIn('/auth/login'),
  function (req, res) {
    res.render('admin', { user: req.user });
  });

module.exports = router;
