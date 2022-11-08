const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'kdt',
});

exports.getVisitors = (callback) => {
    conn.query('select* from visitor', (err,rows) => {
        if (err) {
            throw err;
        
        }

        console.log(rows);
        callback(rows);
    })
}