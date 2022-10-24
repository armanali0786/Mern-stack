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