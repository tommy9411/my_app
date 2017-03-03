var express = require('express');
var path = require('path');
var app = express();


/*
app.get('/', function(req, res){
  res.send('Hello World!!!');
});
*/
//app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

//console.log(__dirname);
var data={count:0};

//route add
app.get('/', function(req, res){
  //console.log(req);
  //console.log(res);
  data.count++;
  res.render('my_first_ejs', data);
  //console.log(res);
});

app.get('/reset', function(req, res){
  data.count=0;
  res.render('my_first_ejs', data);
});

app.get('/set/count', function(req, res){
    if(req.query.count) data.count = req.query.count;
    res.render('my_first_ejs', data);
});

app.get('/set/:num', function(req, res){
    data.count = req.params.num;
    res.render('my_first_ejs', data);
});



app.listen(3000, function(){
  console.log("Server on")
});
