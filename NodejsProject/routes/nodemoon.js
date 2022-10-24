var http = require('http');
http.createServer(function(req,res){
    res.write("Hello Nodemoon Tutorial")
    res.end();
}).listen(5000)