var fs = require('fs');

var file = process.argv[2];
inside = fs.readFileSync(file);
myStr = inside.toString();

console.log(myStr.split('\n').length-1);
