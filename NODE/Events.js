//
var http = require('http');
var fs = require('fs');
var rs = fs.createReadStream('newtest1.txt')
rs.on('open', function () {
console.log("The file is open")
});