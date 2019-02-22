const Orm = require('../config/orm');

class Burger {
  constructor(name, devoured) {
    this.burger_name = name;
    this.devoured = devoured;
  }

  save() {
    Orm.insertOne('burgers', this, result => {
      if (result) {
        return result;
      } else {
        return false;
      }
    });
  }

  static getBurgers(cb) {
    Orm.selectAll('burgers', result => {
      return cb(result);
    });
  }
}

module.exports = Burger;
