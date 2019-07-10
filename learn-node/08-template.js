var http = require('http')
var fs = require('fs')
var template = require('art-template')



var server = http.createServer();

server.on('request', function (req, res) {
	// body...
	var url = req.url;
	
	fs.readdir('D:/wx-demo', function(err, data){
		//data是一个数组
		if (err) {
			res.end('404 not Found!')
		}else {
			fs.readFile('./resource/page-template.html', function(errs, value) {

				//经过模板引擎处理
				var ret = template.render(value.toString(), {
				  infos: data,
				  title: '模板引擎的页面'
				})

				console.log('ret', ret)


				res.end(ret)
			})
		}

	})

})

//监听端口
server.listen(5000, function() {

	// console.log('a:', a) //undefined
	console.log('server is running...')
})