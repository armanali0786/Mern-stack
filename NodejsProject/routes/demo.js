// var http = require('http');
// http.createServer(function (req, res){
//  res.write("Hello Arman");
//  res.end();
// }).listen(5000)


// function test()
// {
//     console.log("Hello Arman");
// }
// test();



// function sum(add)
// {
//     console.log(add(20,30));
// }

// sum(function(a, b)
// {
//     return a+b;
// })


var other = require('./other')
console.log(other(10,20));


var http=require('http');
var data=[
    {name:"arman", age:"20", email:"arman@gmail.com"},
    {name:"faiz", age:"22", email:"faiz@gmail.com"}
]
http.createServer(function(req,res){
     res.writeHead(200,{'Content-Type':'application\json'})
     res.write(JSON.stringify(data));
     res.end();
}).listen(1500)