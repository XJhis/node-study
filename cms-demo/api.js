/**
 * 这个文件是操作数据
 * 2019/5/22
 * asdasd
 */

const fs = require('fs');

const path = './db.json';

/**
 * 查所有学生
 */

 
const queryAll = function (callback) {
    fs.readFile(path, 'utf-8', function (err, data) {
        if (err) {
            callback(err)
        }else {
            callback(null, JSON.parse(data).students);
        }        
    })
}

/**
 * 查指定学生
 */

const queryOne = function (id, callback) {
    queryAll(function (err, data) {
        if (err) {
            callback(err);
        } else {
            var item = data.find(val => val.id === id);
            callback(null, item)
        }
    })
}

/**
 * 增加学生
 */
const addStudent = function (student, callback) {
    var student = student || {};

    queryAll(function (err, data) {
        if (err) {
            return callback(err);
        }

        if (data.length) {
            student.id = data[data.length - 1].id + 1;
            
        }else {
            student.id = 1;
        }

        data.push(student);

        var dbData = JSON.stringify({ students: data })

        fs.writeFile(path, dbData, function (errs) {

            callback(err ? err : null);
        })

    })
}

/**
 * 修改学生
 */
const updateStudent = function (student, callback) {
    var student = student || {};
    student.id = + student.id;

    queryAll(function (err, data) {
        if (err) {
            return callback(err);
        }

        var key = data.findIndex(item => item.id === student.id);

        //这里可以判断一下，如果没找到那就是新增学生，如果找到就是编辑学生

        data.splice(key, 1, student)

        var dbData = JSON.stringify({ students: data })

        fs.writeFile(path, dbData, function (errs) {

            callback(err ? err : null);
        })

    })
}

/**
 * 删除学生
 */

const removeStudent = function (id, callback) {
    queryAll(function (err, data) {
        if (err) {
            return callback(err);
        }

        var key = data.findIndex(item => item.id === +id);

        //这里可以判断一下，如果没找到那就是新增学生，如果找到就是编辑学生

        data.splice(key, 1)

        var dbData = JSON.stringify({ students: data })

        fs.writeFile(path, dbData, function (errs) {
            callback(err ? err : null);
        })

    })
}

module.exports = {
    queryAll,
    queryOne,
    addStudent,
    updateStudent,
    removeStudent
}