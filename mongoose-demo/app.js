const mongoose = require('mongoose');
var Schema = mongoose.Schema;

//连接数据库
mongoose.connect('mongodb://localhost/mytest');

//设计表结构
var userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
})

//将文档结构发布为模型
//第一个参数：传入一个大写名词单数字符串用来表示你的数据库的名称
//mongoose会自动将大写名词的字符串生成为小写的复数的集合名称
var User =  mongoose.model('User', userSchema);

var admina = new User({
    userName: '熊炬辉',
    password: '123456',
    email: '1231232@qq.com'
})


/**
 * 新增 * 
 */
// admina.save(function (err, ret) {
//     if (err) {
//         console.log('保持失败', err);
        
//     }else {
//         console.log('保存成功', ret);        
//     }
// })

/**
 *查询-单个
 */

// User.findOne({
//     userName: '熊炬辉'
// }, function (err, res) {
//     if (err) {
//         console.log('查询失败');
        
//     }else {
//         console.log('操作成功', res);
        
//     }
// })

/**
 * 查询所有
 * 
 */

//  User.find({
//      userName: '熊炬辉1'
//  },function (err, res) {
//      if (err) {
         
//      }else {
//          console.log(res);
         
//      }
//  })

/**
 * 删除 remove ??
 * 新版：deleteOne deleteMany??
 * 
 */