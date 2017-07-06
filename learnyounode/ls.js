var fs = require('fs');
var ext =  process.argv[3];
var dir = process.argv[2];
var path = RegExp('\\.' + ext + '$');

var result = fs.readdir(dir, function(err,data){
	for (var i = 0; i < data.length; i++) {
		if(path.test(data[i])) {
			console.log(data[i]);
		}
	}
	
});


