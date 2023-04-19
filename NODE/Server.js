// display helloworld
var http = require('http');
http.createServer(function(req,res){
    console.log("Server started")
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('hello World!');
}).listen(8800)

// reading content from url and displaying the content
var http = require('http');
http.createServer((req, res)=>{
res.write(req.url);
res.end();
console.log('server running');
}).listen(8080)

//displaying file data
var http = require('http');
var fs = require('fs');
http.createServer((req, res)=>{
    fs.readFile('test.txt', (err, data)=>{
        console.log('server running');
        res.write(data);
        res.end();
    })
}).listen(8880)


//file delition
var http = require('http');
var fs = require('fs');
http.createServer((req, res)=>{
fs.unlink('test.txt', (err)=>{
    {
if(err) throw err; 
console.log('file deleted');
    }
})
}).listen(8888)
