const express = require('express');
const fs = require('fs');

const bodyParser = require('body-parser');

var { comments } = require('./data.js');



const app = express();

app.engine('html', require('express-art-template'));

app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

const port  = 3000;

//处理静态资源
app.use('/public', express.static('./public/'));
app.use('/node_modules', express.static('./node_modules/'));


// 首页
app.get('/', (req, res) => {

	// express 默认会去项目中的 views 目录找 index.html
	// 如果希望修改默认的 views 视图渲染存储目录， 可以如下修改
	// app.set('views', 目录路径)
	
	res.render('index.html', {
		datas: comments
	})	

});

//发表评论页面
app.get('/comment', (req, res) => {		
	res.render('comment.html')	
});


//处理提交数据
app.post('/send', (req, res) => {
	// console.log(req.query);	
	// comments.unshift(req.query);

	//req.body

	console.log('form:', req.body) //Object: null prototype

	comments.unshift(req.body);



	res.redirect('/');	

});



app.listen(port, ()=> {
	console.log('server is running...')
})
