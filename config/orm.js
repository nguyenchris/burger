const db = require('./connection');

class Orm {
  static selectAll(table, cb) {
    const query = 'SELECT * FROM ??';
    db.query(query, [table], (err, result) => {
      if (err) throw err;
      return cb(result);
    });
  }

  static insertOne(table, obj, cb) {
    const query = 'INSERT INTO ?? SET ?';
    db.query(query, [table, obj], (err, result) => {
      if (err) throw err;
      return cb(result);
    });
  }

  static updateOne(table, data, id, cb) {
    const query = 'UPDATE ?? SET ? WHERE id=?;';
    db.query(query, [table, data, id], (err, result) => {
      if (err) throw err;
      return cb(result);
    });
  }
}

module.exports = Orm;
