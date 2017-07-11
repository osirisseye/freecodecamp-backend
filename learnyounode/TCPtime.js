//Writing a TCP time server

//1. listen to TCP connection on particular port
//2. write current date in given format
//3. closing conenctions
var net = require('net');

function zero(x){
	return x < 10 ? "0" + x : x
};
var server = net.createServer(function listener(socket){
	d = new Date();
	return d.getFullYear() + "-" + 
				zero(d.getMonth() +1) + "-" +
				zero(d.getDate()) + " " + 
				zero(d.getHours()) + ":" +
				zero(d.getMinutes()) + "\n";
	

	//socket.write(data);
	socket.end(d);
});

server.listen(process.argv[2]);


//------Official solution
/*
var net = require('net');

function pad(n) { return n < 10 ? '0' + n : n }

var server = net.createServer(function(socket) {
  d = new Date();
  s = d.getFullYear() + "-"
    + pad(d.getMonth() + 1) + "-"
    + pad(d.getDate()) + " "
    + pad(d.getHours()) + ":"
    + pad(d.getMinutes()) + "\n";
  socket.end(s);
});
server.listen(process.argv[2]); */