//first we have to require our http module
var http = require('http');

//knwoing that http.get - gives us GET requeests we pass it the URL (1st param) 
//and callback function which is our response object
//NOTE! that http.get gives us an object which we want to print

http.get(process.argv[2], function callback(res){

	//response object is NODE STREAM (so we need encoding)
	res.setEncoding('utf8');

	//MOST IMPORTANT PART!! Because node stream usees events (err, data, end)
	//every single time we receive a "data" chunk we can use it and log it to the console
	res.on("data", function(data){
		console.log(data);
	});

});

//console.log(process.argv);
//[ node.exe, program.js, 'http://localhost:50386']