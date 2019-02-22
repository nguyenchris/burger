const express = require('express');
const router = express.Router();
const Burger = require('../models/Burger');

router.get('/', (req, res) => {
  Burger.getBurgers(allBurgers => {
    res.render('index', {
        burgers: allBurgers,
        hasBurgers: allBurgers.length > 0
    })
  });
});

module.exports = router;
