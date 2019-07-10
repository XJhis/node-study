var http = require('http')
var fs = require('fs')



var server = http.createServer();

server.on('request', function (req, res) {
	// body...
	var url = req.url;
	
	fs.readdir('D:/wx-demo', function(err, data){
		//data是一个数组
		if (err) {
			res.end('404 not Found!')
		}else {
			fs.readFile('./resource/page.html', function(errs, value) {
				var result,
					temp = '';

				data.forEach(val => {
					temp += `<tr>
							    <td data-value="data/"><a class="icon dir" href="/D:/learn-node/data/">${val}/</a></td>
							    <td class="detailsColumn" data-value="0"></td>
							    <td class="detailsColumn" data-value="1557542520">2019/5/11 上午10:42:00</td>
							</tr>`
				})

				var result = value.toString().replace('@##@ ', temp);

				res.end(result);
			})
		}

	})

})

//监听端口
server.listen(5000, function() {

	// console.log('a:', a) //undefined
	console.log('server is running...')
})