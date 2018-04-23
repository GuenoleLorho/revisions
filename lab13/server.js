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
  x = parseInt(x);
  var y = req.query.y;
  y = parseInt(y);
  res.send("X+Y="+(x+y));
});
//route 5 calc
app.get('/calc', function(req,res){
  var x = req.query.x;
  x = parseInt(x);
  var y = req.query.y;
  y = parseInt(y);
  var op = req.query.op;
  var id = req.query.url;
  //console.log("x="+ x+"  y="+y+"  op="+op+"  id="+id);
  //res.send("x="+ x+"  y="+y+"  op="+op+"  id="+id);
  if(op === "add"){
    res.send("X+Y="+(x+y));
  }else {
    if(op === "sub"){
      res.send("X+Y="+(x-y));
    }else {
      if(op === "mul"){
        res.send("X+Y="+(x*y));
      }else {
        if(op === "div"){
          res.send("X+Y="+(x/y));
        }else {
          res.send("doesn't work man");
        }
      }
    }
  }

});

app.listen(8080);
