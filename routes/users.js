var express = require('express');
var router = express.Router();

router.get('/users', function(req, res){
	res.json({
		user:{
			"name":"fulano",
			"idade":19,
			"email":"fulano@fulano.com.br",
			"telefone": "99983948"
		}
	});
});

module.exports = router;