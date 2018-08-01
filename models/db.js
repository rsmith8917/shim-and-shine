var db = {};
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'system',
    password: 'n17s21o1',
    database: 'db'
});

db.query = function(query, values, callback) {
    connection.query(query, values, callback);
};

module.exports = db;