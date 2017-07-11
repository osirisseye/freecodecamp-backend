//Writing a HTTP server serving JSON to spec dir, when receives a GET request.

//1.create http server, 2.Filter to anwer GET req, 3.Write JSON formatted res
//4.send res to the appropriate path

var http = require('http');
var url = require('url');
var fs = require('fs');

var port = process.argv[2];


//Let's do things in a modular fashion


//3.-----------Getting the right format for the right path-------------------
//Getting the JSON formatted time from our query (which we'll pass as an arg to this function)
var parsingTime = function(time) {
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	}
}
//Very similar thing for our unixTime path.
var unixTime = function(time){
	return {unixtime: time.getTime()}
}
//------------------------------------------------------------------------


//4.-----------Sending the right formatted date into the path---------------
var parser = function(url) {
	switch(url.pathname){
		case '/api/parsetime' :
		return parsingTime(new Date(url.query.iso))

		case '/api/unixtime' :
		return unixTime(new Date(url.query.iso))
	}
};
//------------------------------------------------------------------------

//1.we create a server
var server = http.createServer(function(req,res){
	//2.checking if we receive 'GET' requests
	if(req.method === 'GET'){
		//we will extract url and the query we need
		url = url.parse(req.url, true)
		//Calling out function (to send the date into the path - that f will call our data fromatting function )
		res.end(JSON.stringify(parser(url)))
	} else {
		res.writeHead(405);
		res.end();
	}

});
server.listen(port);
