//Writing a HTTP server (filter: POST, 'mapping' over buffered chunks with through2-map)

//1.create http server, 2.Filter to anwer POST req only, 3.transofrm chunks into upper
//4.Write response to the user

var http = require('http');
var fs = require('fs');
var map = require('through2-map');

var port = process.argv[2];

//1.we create a server
var server = http.createServer(function(req,res){
	
//2. !!!!!! first filtering for POST requests ONLY
	if (req.method != 'POST'){	
		return res.end('send me a POST req');
	}
//1 continued! When we have POST only then we will write REQ STATUS (number) and content type
		res.writeHead(200, {'Content-Type':'text/plain'});
//3 We use our map functionality from through2-map and turn chunks to upper case
		req.pipe(map(function(chunk){
			return chunk.toString().toUpperCase()
//4. Finally we are piping transformed chunks into our response.
		})).pipe(res)
		
});
server.listen(port);
