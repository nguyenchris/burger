const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: 'orange102938',
  port: 3306,
  database: 'burgers_db',
  host: 'localhost'
});

module.exports = connection;
