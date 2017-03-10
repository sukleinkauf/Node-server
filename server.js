var express = require('express');
var app = express();
var port = '3000';

var application = require('./app') //chamando app
app.use(application);

app.listen(port);
console.log('Servidor iniciado na porta '+port+' Acesse localhost:'+port);