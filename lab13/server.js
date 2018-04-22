var express = require('express');
var app = express();
//route1
app.get('/', function(req, res){
  res.send("hello world! by express");
})
//route2
app.get('/test', function(req, res){
  res.send("this is route 2");
})
//route3 = knock knock jokes
app.get('/joke', function(req, res){
  var knockknock = require ('knock-knock-jokes')
  var randomJoke = knockknock()
  res.end(randomJoke);
})
//route4
app.get('/add', function(req,res){
  var x = req.query.x;
  var y = req.query.y;
  res.send("X+Y="+(x+y));
});


app.listen(8080);
