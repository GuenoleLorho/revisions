var express = require('express');
var app =express();

var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: 'G8ciHP2LBIsMCGQOFnsXBgAEU',
  consumer_secret: 'oGkdRsdv3mJzsBQX9Da3Q3n76sLTVN8WB2oQ67JmKRzjtkgNg3',
  access_token_key: '988554737120432128-ekr9I8PrMWzWYuzSVOKH4xztT2kqxSR',
  access_token_secret: 'mkrYHaXlJ7MXhUZNB5fAkbjOEzvHxWZk33UbYM1oSG27A'
})






app.use(express.static('public'))
app.get('/', function(req, res){
  var params = {
    screen_name: 'node.js'
  };

  client.get('statues/user_timeline', params, function(error, tweets, respond){
    if(!error){
      console.log(tweets);
    }
  });
  res.send("Hello world! by express");
});



app.listen(8080);
