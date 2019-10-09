// 需求： 你需要封装一个方法， 我给你一个读取文件的路径，你这个方法能够帮我们读取文件，并把内容返回给我

const fs = require('fs');
const path = require('path');

// 把一个回调函数拆分成两个回调函数（分别代表失败和成功）
function getFileByPath(fpath, successCb, errCb){
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        if(err) return  errCb(err)
        successCb(dataStr)
    })
}

// getFileByPath(path.join(__dirname, './files/1.txt'), 
//     function(data){
//      console.log(data + '哈哈哈，成功了！！！');
     
//     },
//     function(err){
//       console.log('失败了'+ err );
      
//     }
// )


// 需求： 先读取文件1 在读取文件2 最后读取文件3
// 回调地狱
// 使用 Es6 中的 promise ，来解决回调地狱的问题;
// 问：promise 的本质是要干什么？ 就是单纯的为了解决回调地狱的问题，并不能帮我们减少代码量；
getFileByPath(path.join(__dirname, './files/1.txt'), function (data){
    console.log(data);
    getFileByPath(path.join(__dirname, './files/2.txt'), function (data){
        console.log(data);
        getFileByPath(path.join(__dirname, './files/3.txt'), function (data){
            console.log(data);
        
        })
    })
})