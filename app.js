var express = require('express');
var router = express.Router();

var index = require('./routes/index');
router.use(index);

var list = require('./routes/list-users');
router.use(list);

var products = require('./routes/products');//definindo rotas do meu app
router.use(products);

var add =require('./routes/add-users');
router.use(add);

module.exports = router;