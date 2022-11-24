const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    fs.readFile('index.html',(err,data)=>{
        res.writeHead(200,{'content-type':"text/html"})
        res.end(data);
    })
   

}).listen(8000,console.log("server is running on port 8000"));