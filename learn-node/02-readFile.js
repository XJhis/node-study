var fs = require('fs');

fs.readFile('./first_console.js', function (err, data) {
	// body...
	console.log('err:', err) //null
	console.log('data:', typeof data.toString())
})