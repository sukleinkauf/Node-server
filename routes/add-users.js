var express = require('express');
var router = express.Router();
var fs = require('fs')
var file = require('./../controller/file');


router.post('/add-users', function(req, res){
	file.read(function(data){

		var params = req.query;// pega parametros digitados e salva
		var checkname=0;

		checkname = file.check(data,params);

		var paramsok= file.includeid(params, data);

		

		if(checkname == false){
			res.json({'msg':'Usuário já cadastrado!'});
		}
		else{
			// file.includeid(data, params);
			data.push(paramsok); //adiciona parametros aos arquivos já existente
			var dataJson = JSON.stringify(data) //transforma variavel em Json
			file.write(dataJson, res);	
		}
	});
})

module.exports = router;