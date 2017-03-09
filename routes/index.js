var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.json({'msg':'Bem-vindo'});
});

module.exports = router;