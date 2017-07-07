//first we have to require our http module

//writing a recursive function to take each asynch requests  one after the other and 
//store results in an array only to log them after all url's responded
var http = require('http');

var URLs = [process.argv[2], process.argv[3], process.argv[4]];
var results = [];

function synchAPICalls(urls) {
	var url = urls.pop();

	http.get(url, function(res){
		res.setEncoding('utf8');
		var chunks = '';

		res.on('data', function(d){ chunks += d; });

		res.on('end', function() {
			results.unshift(chunks);

			if(urls.length){
				synchAPICalls(URLs);
			} else {
				results.forEach(function(x){
					console.log(x)
				});
				
			}
		})
	});
};

synchAPICalls(URLs);

//--------------official solution

var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

function printResults() {
	for (var i = 0; i< 3; i++){
		console.log(results[i])
	}
}

function httpGet(index){
	http.get(process.argv[2+index], function(response){
		response.pipe(bl(function(err,data){
			if(err){
				return console.error(err)
			}
			results[index]=data.toString();
			count++;

			if (count ===3){
				printResults();
			}
		}))
	})
}

for(var i=0;i<3;i++){
	httpGet(i)
};