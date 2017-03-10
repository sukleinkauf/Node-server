var fs = require('fs');

module.exports ={
	read: function(callback){
		fs.readFile(__dirname + "/../" + "db/users.json", 'utf8',function(err, data){
			if(err)
				return console.log(err);
			data = JSON.parse(data);
			callback(data);
		});
	},
	check: function(data, params){
		var check= 0;
		for(var i=0;i<data.length;i++){
			if(data[i].name==params.name){
				check = 1;
			}
		}
		if (check==0){
			return true;
		}else{
			return false;
		}
	},
	
	write: function(dataJson, res){
		fs.writeFile(__dirname + "/../" + 'db/users.json', dataJson, function(err){
			if(err)
				return console.log(err);
			res.json({'msg': 'Usuário inserido com sucesso!'});
		});
	}
}