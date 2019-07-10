
const fs = require('fs');

const path = './db.jsons';

const readFileP = function (url) {
    return new Promise((resolve, reject) => {
        fs.readFile(url, 'utf-8', function (err, data) {
            if (err) {
                reject(err)
            }else {
                resolve(JSON.parse(data));
            }        
        })
    })
}

const queryAll = function () {
    return readFileP(path);
}

const queryOne = function (id) {
    return readFileP(path).then(res => {
        let {students} = res;
        let item = students.find(val => val.id === id);
        return item;
    }, err => {
        console.log('err', err);        
    });
}


queryAll().then(data => {
    console.log(data);
    
}, err => {
    console.log('err', err);
    
})