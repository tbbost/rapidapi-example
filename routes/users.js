const express = require('express');
const router = express.Router();
const users = require('../data/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

module.exports = router;
