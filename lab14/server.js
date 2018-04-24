var express = require('express');
var app =express();

var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: 'xxxxxxxx',
  consumer_secret: 'xxxxxxx',
  access_token_key: 'xxxxxxx',
  access_token_secret: 'xxxxxxxx'
})

app.use(express.static('public'))

var params = {screen_name: 'node.js'};
client.get('statues/user_timeline', params, function(error, tweets, respond){
  if(!error){
    console.log(tweets);
  }
});

app.get('/', function(req, res){
  res.send("Hello world! by express");
});



app.listen(8080);
