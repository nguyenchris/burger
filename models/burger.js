const Orm = require('../config/orm');

class Burger {
    constructor(name, devoured) {
        this.burger_name = name;
        this.devoured = devoured;
    }
    
}

module.exports = Burger;