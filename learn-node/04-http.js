var http = require('http')

var server = http.createServer()

server.on('request', function(req, res) {
	// console.log('a1:', a1)
	// console.log('a2:', a2)
	var url = req.url,
		port = req.socket.remotePort,
		adress = socket.remoteAddress;

	console.log('收到客户端请求', url) //客户端请求的路径
	console.log('收到客户端请求port', port) //客户端请求的路径
	console.log('收到客户端请求adress', adress) //客户端请求的路径

	// res.end('url:'+req.url+';port：' + port +'；adress:'+ adress);
	res.end('end');
}) 

server.listen(8080, function() {
	console.log('服务器启动成功了')
})

console.log('resolve:', require.resolve('./04-http.js'))