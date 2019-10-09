// 需求： 你需要封装一个方法， 我给你一个读取文件的路径，你这个方法能够帮我们读取文件，并把内容返回给我

const fs = require('fs');
const path = require('path');

// 初衷： 给定文件路径，返回读取到的内容
// 我们可以规定一下 ，callback 里面有两个参数，第一个参数是失败的结果, 第二各参数是成功的结果；
// 同时，我们规定； 如果成功后，返回的结果，应该位于callback 的第二个参数的位置，此时，第一个位置
// 由于没有出错, 所以放一个null; 如果失败了,则 第一个位置 放置 Error 对象, 第二个位置 放置一个 undefined
function getFileByPath(fpath, calllback){
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        if(err) return  calllback(err)
        calllback(null, dataStr)
    })
}

getFileByPath(path.join(__dirname, './files/1.txt'), (err, dataStr) => {
    // console.log(dataStr + '---')
    if(err) return console.log(err.message);
    console.log(dataStr); 
})

// function getFileByPath(fpath){
//     fs.readFile(fpath, 'utf-8', (err, dataStr) => {
//         if(err) throw err;
//         return dataStr;
//     })
// }
// const  data= getFileByPath(path.join(__dirname, './files/1.txt');
// console.log(data)
