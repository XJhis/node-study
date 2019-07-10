var fs = require('fs')

fs.writeFile('./data/writeData.txt', '哈哈哈哈哈', function (err) {
	// body...
	console.log('err:', err)
})