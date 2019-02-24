const express = require('express');
const router = express.Router();
const Burger = require('../models/Burger');

router.get('/', (req, res) => {
  Burger.getBurgers(burgers => {
    res.render('index', {
        burgers: burgers,
        hasBurgers: burgers.length > 0
    })
  });
});

router.put('/api/burgers', (req, res) => {
    Burger.updateBurger(req.body, result => {
        if (result) {
            res.send(true);
        } else {
            res.send(false);
        }
    })
});

router.post('/api/burgers', (req, res) => {
    const newBurger = new Burger(req.body.burger_name, 0)
    newBurger.save(result => {
        if (result) {
            res.send(true);
        }
    });
});

module.exports = router;
