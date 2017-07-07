var filter = require('./filter');
var ext =  process.argv[3];
var dir = process.argv[2];
//filter.js did all the filtering and now in 'data' we have stored our files with the right extension - time to log'em

//below line takes the exported function on line4 from filter.js
filter(dir, ext, function(err, data){
	//handling callback error
	if(err)
		return console.log('error');

	// Finally, we are passing every single item ('file' parameter) in our 'data' variable through .forEach
	data.forEach(function (file){
		//and log them all line by line
		console.log(file)
	});
});