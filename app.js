var express = require('express');
var router = express.Router();

var index = require('./routes/index');
router.use(index);

var users = require('./routes/users');
router.use(users);

module.exports = router;