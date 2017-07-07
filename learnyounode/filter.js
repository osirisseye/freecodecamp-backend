var fs = require('fs');

//when exporting we can do this to the whole function - compare line below with ls_mod line6 (same arguments)!
module.exports = function (dir, ext, callback ) {
	//we will use regular expression to build our FILTER against which we will test extensions of all files in the dir
	var path = RegExp('\\.' + ext + '$');

	//below: readdir reads the directory (1st param) and "LISTS" all files in it - this is when callback is performed 
	fs.readdir(dir, function(err,data) {
		//handling callback error
		if(err)
			return callback(err)

		//using our callback to push the list of all files in the dir (done by fs.readdir) we perform a FILTERING 
		data = data.filter(function(file){
			//we are returning only files that pass the test of our REGEX
			return path.test(file)
			//now our 'data' variable has only files with the right extension
		})
		//if we passed the above error (without problems) we can give our 'callback' function a null arg for error testing
		//and pass list of files with the right extension to the exported function -> NOW go to ls_mod.js file!
		callback(null, data)
	})
}