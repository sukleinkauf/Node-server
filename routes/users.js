var express = require('express');
var router = express.Router();

router.get('/users', function(req, res){//requerição de get 
	res.json({
		users:[
			{
				"id": 1,
				"name":"fulano",
				"idade":19,
				"email":"fulano@fulano.com.br",
				"telefone": "99983948"
			},
			{
				"id": 2,
				"name":"ciclano",
				"idade":59,
				"email":"ciclano@ciclano.com.br",
				"telefone": "939983948"
			},
		]
	});
});

module.exports = router;