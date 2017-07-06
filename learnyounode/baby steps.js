var fs = require('fs');

var result = 0;

for (var i = 2; i < process.argv.length; i++) {
	var num = +process.argv[i]
	result += num;
}

console.log(result);