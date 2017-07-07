//first we have to require our http module
var http = require('http');

//knwoing that http.get - gives us GET requests we pass it the URL (1st param) 
//and callback function which is our response object
//NOTE! that http.get gives us an object which we want to print

http.get(process.argv[2], function callback(res){

	//response object is NODE STREAM (so we need encoding)
	res.setEncoding('utf8');

	//MOST IMPORTANT PART!! Because node stream usees events (err, data, end)
	//every single time we receive a "data" chunk we can use it and log it to the console

  //BUT!!! we will receive many 'chunks' so we concatenate them
	let rawData = '';
  	res.on('data', (chunk) => { rawData += chunk; });

    //when response is finished - all chunks are concat'd we print our result:
  	res.on('end', () => {
    
     // first an int of number of chars received 
     console.log(rawData.length);
     //then, our concatenated string
     console.log(rawData);
     
    });
});