// var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/mytest', {useNewUrlParser: true});


// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connnetion error'));


// db.on('open', function () {
//     console.log('server is open');

// })

//引入mongoose模块
const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const con = mongoose.connection;

con.on('err', console.error.bind(console, '连接数据库失败！'));

con.once('open', () => {
    console.log('数据库已经连接');

    let appleSchema = new mongoose.Schema({
        name: String,
        type: String,
    })


    appleSchema.methods.eat = function () {
        console.log('eating' + this.name);

    }

    let Apple = mongoose.model('aa', appleSchema);

    let apple = new Apple({
        name: '苹果啊',
        type: 'apple'
    })

    //增
    apple.save((err, data) => {
        if (err) {
            return console.log('err', err);
        }

        data.eat()
        console.log('保存成功', data);

        Apple.find(function (err, datas) {
            if (err) {
                return console.log('err', err)
            }

            console.log('datas', datas);

        })

        //改

        Apple.updateOne({ name: '苹果啊' }, { name: '新苹果啊' }, function (err, data) {
            if (err) {
                console.log(err);

            } else {
                console.log('data', data);

            }
        })

        //删

        Apple.findByIdAndRemove({ _id: '5cf522b1d0364d00ec7d83a6' }, function (err, res) {
            if (err) {
                console.log(err);

            } else {
                console.log('删除成功');

                console.log('res', res);

            }
        })

        Apple.deleteMany({ type: 'apple'}, function (err, data) {
            if (err) {
                console.log(err);

            } else {
                console.log('删除成功');

                console.log('data', data);

                Apple.find(function (err, data) {
                    console.log('all', data);
                    
                })

            }
        })

        

    })





})

