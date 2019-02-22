const Orm = require('../config/orm');

class Burger {
  constructor(name, devoured) {
    this.burger_name = name;
    this.devoured = devoured;
  }

  save(cb) {
    Orm.insertOne('burgers', this, result => {
      if (result) {
        return cb(result);
      } else {
        return cb(false);
      }
    });
  }

  static getBurgers(cb) {
    Orm.selectAll('burgers', result => {
      return cb(result);
    });
  }

  static updateBurger(obj, cb) {
    Orm.updateOne('burgers', obj, obj.id, result => {
      return cb(result);
    })
  }
}

module.exports = Burger;
