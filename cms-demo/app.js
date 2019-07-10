const express = require('express');

const router = require('./route.js');

const bodyParser = require('body-parser');

const port = 3000;

var app = express();

//使用art-template模板
app.engine('html', require('express-art-template'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json()); 

//处理静态资源
app.use('/public', express.static('./public/'));
app.use('/node_modules', express.static('./node_modules/'));

app.use(router);

app.listen(port, () => {
	console.log('server is running...')
})