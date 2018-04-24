var express = require('express');
var app = express();/*
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'ovytMEBOVa7vgTPGkXjo2Zqzyv',
  consumer_secret: 'UIXD2rBiFvGEiqYCW1Gv1JgcQikOMLpfTwC2NHx5DbwaJhvRJX',
  access_token_key: '988554737120432128-ekr9I8PrMWzWYuzSVOKH4xztT2kqxSR',
  access_token_secret: 'mkrYHaXlJ7MXhUZNB5fAkbjOEzvHxWZk33UbYM1oSG27A'
});*/


app.use(express.static('public'))



app.get('/', function(req, res) {/*
  var params = {
    screen_name: 'nodejs'
  };
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log("tweets"):
    }
  });*/

  res.send("hello world! by express");
});


app.listen(8080);
