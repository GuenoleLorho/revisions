var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send("hello world! by express");
})
app.get('/test', function(req, res){
  res.send("this is route 2");
})
app.listen(8080);
