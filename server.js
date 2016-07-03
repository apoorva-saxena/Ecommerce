var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://root:secret@ds011705.mlab.com:11705/ecommerce', function(err) {
  if(err) {
    console.log(err);
  }
  else {
    console.log("Connected to the database");
  }
});

//Middleware
app.use(morgan('dev'));

app.get('/', function(req, res){
  var name = "Apoorva";
  res.json("Hi my name is "+ name);
});

app.listen(3000, function(err) {
  if (err) throw err;
  console.log("Server is running on port 3000");
});
