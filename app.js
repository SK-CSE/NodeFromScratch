var express = require('express');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/bookAPI');
var Book = require('./models/bookModel');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var bookRouter = require('./routes/bookRoutes')(Book);

app.use('/api/books',bookRouter);
// app.use('/api/authors',authorRouter);


app.get('/', function(req,res){
	res.send("welcome to my api");
});
 
app.listen(port, function(){
	console.log("server start at:"+ port);
});