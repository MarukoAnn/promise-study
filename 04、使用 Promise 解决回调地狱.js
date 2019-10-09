const fs = require('fs');


function getFileByPath(fpath) {
    return new Promise(function(resolve, reject){
         fs.readFile(fpath, 'utf-8', (err, dataStr) => {
             if(err) return reject(err)
             // console.log(dataStr);
             resolve(dataStr)
         })
     })
 }

//  先读取文件1， 在读取文件2，最后读取文件3
// 注意：通过 .then 指定 回调函数的时候，成功的 回调函数，必须传，但是，失败的回调，可以省略不传

// 如果前面的promise 执行失败，我们不想让后续的 promise 操作被终止，可以为每个
// promise操作 指定 失败的回调
/* getFileByPath('./files/1.txt').then(function(data){
    console.log(data);
    return getFileByPath('./files/2.txt')
}).then(function(data){
    console.log(data);
    return getFileByPath('./files/3.txt')
}).then(function(data){
    console.log(data);
}) */
// console.log('okokok');

// 当我们有这样的需求时： 那怕前面的 Promise 执行失败了， 但是，不要影响后续 promise 的正常
// 执行，此时， 我们可以单独为 每个promise，通过 .then 指定一下失败的回调。
/* getFileByPath('./files/12.txt').then(function(data){
    console.log(data);
    return getFileByPath('./files/2.txt')
}, function(err){
    console.log(err.message);
    return getFileByPath('./files/2.txt')
}).then(function(data){
    console.log(data);
    return getFileByPath('./files/3.txt')
}).then(function(data){
    console.log(data);
}) */

// 有时候，我们有这样的需求，和上面的需求刚好相反， 如果 后续的Promise 执行，
// 依赖于前面的 Promise 执行的结果，如果前面的失败了，则后面的就没有继续执行下去的意义了，
// 此时，我们想要是要实现，一旦有报错，则立即终止所有的 Promise 的执行;

getFileByPath('./files/1.txt').then(function(data){
    console.log(data);
    return getFileByPath('./files/2.txt')
}).then(function(data){
    console.log(data);
    return getFileByPath('./files/3.txt')
}).then(function(data){
    console.log(data);
}).catch(function(err){ // catch 的作用： 如果前面的有任何的 Promise 执行失败，则会立即终止
    // 所有的Promise 的执行，并马上进入 catch 去处理 promise中抛出的异常
    console.log(err.message);
})