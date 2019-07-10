var http = require('http')
var fs = require('fs')

var server = http.createServer();

server.on('request', function (req, res) {
	var url = req.url;

	if (url === '/') {
		
		fs.readFile('./resource/index.html', function(err, data) {
			if (!err) {

				res.setHeader('Content-Type', 'text/html; charset=utf-8');
				res.end(data)
			}
		})

	}else if (url === '/index.css'){
		fs.readFile('./resource/index.css', function(err, data) {
			if (!err) {

				res.setHeader('Content-Type', 'text/css; charset=utf-8');
				res.end(data)
			}
		})
	}else if (url === '/index.js'){
		fs.readFile('./resource/index.js', function(err, data) {
			if (!err) {

				res.setHeader('Content-Type', 'application/x-javascript; charset=utf-8');
				res.end(data)
			}
		})
	}else if (url === '/img.jpg'){
		fs.readFile('./resource/img.jpg', function(err, data) {
			if (!err) {

				res.setHeader('Content-Type', 'image/jpeg');
				res.end(data)
			}
		})
	}
})

server.listen(5000, function() {
	console.log('server is running...')
})