const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 10,
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'book_mgmt_sftwre_db',
    insecureAuth: true,
    bigNumberStrings: true,
    dateStrings: true,
    debug: true,
    trace: true
});

module.exports = pool;