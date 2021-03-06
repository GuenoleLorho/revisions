/**
 * @Author: John Isaacs <john>
 * @Date:   18-Mar-182018
 * @Filename: server.js
 * @Last modified by:   john
 * @Last modified time: 25-Mar-182018
 */



const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/star_wars_quotes";
const express = require('express');
const bodyParser = require('body-parser')
const app = express();


app.use(bodyParser.urlencoded({extended: true}))
// set the view engine to ejs
app.set('view engine', 'ejs');

var db;

MongoClient.connect(url, function(err, database) {
  if (err) throw err;
  db = database;
  app.listen(8080);
  console.log('listening');
});

//you need to complete these
/*
app.get('/', function(req,res) {
  res.render('pages/index')
});*/
app.get('/add', function(req,res) {
  res.render('pages/add')
});
app.get('/delete', function(req,res) {
  res.render('pages/delete')
});
app.get('/filter', function(req,res) {
  res.render('pages/filter')
});
app.get('/update', function(req,res) {
  res.render('pages/update')
});



app.get('/', function(req, res) {
  var output="Test 2 working";

  db.collection('quotes').find().toArray(function(err, result) {
    if (err) throw err;
    console.log(result);

    res.render('pages/index', {
      quotesarray : result,
      output: output
    });
  });
});

/*




app.get('/', function(req, res){
  var drinks=[
    {name: 'Bloody Mary', drunkness: 3},
    {name:'Martini', drunkness: 5},
    {name: 'Scotch', drunkness: 10}
  ];
  var tagline="Any code of your own that you haven't looked at for six or more months might as well have been written by someone else";
  res.render('pages/index', {
    drinks: drinks,
    tagline: tagline
  });
});*/


app.post('/quotes', function (req, res) {
  db.collection('quotes').save(req.body, function(err, result) {
    if (err) throw err;
    console.log('saved to database')
    res.redirect('/')
  })
})

app.post('/search', function(req, res) {
  db.collection('quotes').find(req.body).toArray(function(err, result) {
    if (err) throw err;

    var output = "quotes by " +req.body.name;
    res.render('pages/results', {
      quotesarray : result,
      output : output
    });
  });
});





app.post('/delete', function(req, res) {
  db.collection('quotes').deleteOne(req.body, function(err, result) {
    if (err) throw err;
    res.redirect('/');
  });
});

app.post('/update', function(req, res) {
  var query = { quote: req.body.quote };
  var newvalues = { $set: {name: req.body.newname, quote: req.body.newquote } };
  db.collection('quotes').updateOne(query,newvalues, function(err, result) {
    if (err) throw err;
    res.redirect('/');
  });
});
