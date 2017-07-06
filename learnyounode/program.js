var fs = require('fs');

var file = process.argv[2];
inside = fs.readFile(file, 'utf8', function(err,data){
	
	console.log(data.split('\n').length-1);
});



