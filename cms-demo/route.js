// const express = require('express');
// const fs = require('fs');

// const optStudents = require('./api')

//利用commonjs的模块方法
//也可以，但是express有更简单的方法

// module.exports = function(app) {
// 	app.get('/', function (req, res) {
// 		// body...

// 		fs.readFile('./db.json', 'utf-8', (err, data)=> {
// 			if (err) {
// 				return res.status(500).send('server err!')
// 			}

// 			let info = JSON.parse(data);
// 			res.render('index.html', {
// 				header: info.header,
// 				students: info.students
// 			})

// 		})	

// 	})
// }


const express = require('express');

const optStudents = require('./api');

var router = express.Router();

/**
 * 这里是放页面
 * 别放错了
 */

//页面-首页
router.get('/', function(req, res) {
    optStudents.queryAll(function (err, data) {
        if (err) {
            return res.status(500).send('server err!')
        }
        res.render('index.html', {
            students: data
        })
    }) 
})

//页面-新增学生
router.get('/add', function(req, res) {
    res.render('add.html')
})

//页面-编辑学生
router.get('/edit', function(req, res) {
    //注意这里需要转成数字
    var id = parseInt(req.query.id);
    //查询某个学生的信息
    optStudents.queryOne(id, function (err, data) {
        if (err) {
            return res.status(500).send('server err!')
        }
        
        res.render('edit.html', data)

    })
    
})

/**
 * 
 * API放这里
 * 
 */


// api-新增学生
router.post('/api/add', function(req, res) {
    let student = req.body;

    optStudents.addStudent(student,function (err, data) {
        if (err) {
            return res.status(500).send('server err!')
        }

        res.redirect('/');
    })
})

// api-修改学生
router.post('/api/edit', function(req, res) {
    let student = req.body;

    optStudents.updateStudent(student, function (err, data) {
        if (err) {
            return res.status(500).send('server err!')
        }

        res.redirect('/');
    })
})

// api-删除学生
router.get('/api/remove', function(req, res) {
    var stuId = req.query.id;

    optStudents.removeStudent(stuId, function (err, data) {
        if (err) {
            return res.status(500).send('server err!')
        }

        res.redirect('/');
    })
})

//导出路由
module.exports = router