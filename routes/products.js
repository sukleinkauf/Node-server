var express = require('express');
var router = express.Router();

router.get('/products', function(req, res){
	res.json({
		product:[
			{
				"id": 1,
				"name":"banana",
				"Quantidade":56,
				"valor": 3.44,
				"status": "a"
			},
			{
				"id": 2,
				"name":"melancia",
				"Quantidade":536,
				"valor": 2.44,
				"status": "i"
			}
		]
	});
});

module.exports = router;