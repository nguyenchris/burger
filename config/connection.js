const mysql = require('mysql');

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    user: 'root',
    password: 'orange102938',
    port: 3306,
    database: 'burgers_db',
    host: 'localhost'
  });
}

connection.connect();

module.exports = connection;
