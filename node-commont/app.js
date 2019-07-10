var http = require('http');

var fs = require('fs');

var url = require('url');


var template = require('art-template');

var comments = [
	{
		name: '蔡徐坤',
		content: '我喜欢唱、跳、rap、还有篮球',
		createTime: '2018-12-12'
	},
	{
		name: '鹿晗',
		content: '别再说我像个男人了',
		createTime: '2017-12-2'
	},
	{
		name: '吴亦凡',
		content: 'rap、rap、跟着我的节奏一起来',
		createTime: '2018-3-12'
	},

]

const preadFile = function (url) {
	return new Promise((resolve, reject) => {
		fs.readFile(url, function (err, data) {
			if (err) {
				reject(err)
			} else {
				resolve(data)
			}

		})
	})
}

http.createServer()
	.on('request', function (req, res) {
		var urlData = url.parse(req.url, true),
			pathname = urlData.pathname,
			query = urlData.query;

		if (pathname === '/') {
			// fs.readFile('./views/index.html', function(err, data){
			// 	if (err) {
			// 		return res.end('404 not Found!')
			// 	}
			// 	var result = template.render(data.toString(), {
			// 		datas: comments
			// 	})

			// 	res.end(result);

			// })

			preadFile('./views/index.html').then(data => {
				var result = template.render(data.toString(), {
					datas: comments
				})

				res.end(result);
			}, err => {
				res.end('404 not Found!')
			})

		} else if (pathname === '/comment') {
			fs.readFile('./views/comment.html', function (err, data) {
				if (err) {
					return res.end('404 not Found!')
				}

				res.end(data);

			})

		} else if (pathname === '/send') {

			query.createTime = Date.now();
			comments.unshift(query);

			res.statusCode = 301;

			res.setHeader('location', '/');

			res.end('asdasdadad')

		} else if (pathname.indexOf('/public/' === 0)) {
			//静态资源统一处理
			fs.readFile('.' + pathname, function (err, data) {
				if (err) {
					return res.end('404 not Found!')
				}

				res.end(data);

			})
		}






	})
	.listen(5000, function () {

		// console.log('a:', a) //undefined
		console.log('server is running...')
	})
