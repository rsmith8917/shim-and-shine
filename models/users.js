var db = require('./db');
var users = {};

users.findByUsername = function(username, callback) {
    db.query('SELECT * FROM users WHERE username=?', [username], function(err, results, fields){
        if(err) {
            callback(err, null);
        } else {
            callback(null, results[0]);
        }
    });
};

module.exports = users;
