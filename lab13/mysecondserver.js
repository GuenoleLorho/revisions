var http = require('http');
http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.end('Hello World!');
}).listen(8080);

var http = require('http');
var currentdate = require('./mymodule');

http.createServer(function (req, res){
  res.writeHead(200, {'Content-type': 'text/html'});
  res.write("the date and time are currently: " + currentdate.myDateTime());
  res.end('Hello World!')
}).listen(8080);
