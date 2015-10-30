// Retrieve change here
var express = require('express');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var BSON = mongodb.BSONPure;
var http = require('http');
var bodyParser = require('body-parser')
var path = require('path');

var app = express();
app.set('views', __dirname + '/client/index.html'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client'))); 

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/client/index.html');	
});

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/angularService", function(err, db) {
  if(!err) {
    console.log("We are connected at 8001 port");
	
	var collection = db.collection('event');
	var sessionCollection = db.collection('sessions');
	console.log("We are createCollection");
	
	var event = {
		"name": "Learning", 
		"date": "29/01/2015", 
		"time": "16.24 PM", 
		"duration": "4", 
		"price": "2000", 
		"city": "pune", 
		"district": "pune", 
		"state": "maharashtra"
	}
	var sessions = [{
		"name": "BackboneJS", 
		"complexity": "Hard", 
		"documentation": "available", 
		"star": "4"
	}, 
	{
		"name": "AngularJS", 
		"complexity": "Easy", 
		"documentation": "available", 
		"star": "5"
	},
	{
		"name": "KnockoutJS", 
		"complexity": "medium", 
		"documentation": "available", 
		"star": "3"
	},
	{
		"name": "ExtJS", 
		"complexity": "Hard", 
		"documentation": "available", 
		"star": "5"				
	}]; 
	
	var setdbDummyData = function()
	{
		//insert/update/remove/query 	
		collection.insert(event, {w:1}, function(err1, result1) {
			if(!err1)
			{
				sessionCollection.insert(sessions, {w:1}, function(err2, result2) {
					if(!err2)
					{
						
					}
				});	
			}
		});
	}
	
	setdbDummyData();
	
	// get requested db data 
	app.get('/api/data/1', function (req, res){

		//client.collection('user', function(err, collection) {
		collection.find().toArray(function(err, items) {
		  //console.log(items);
			sessionCollection.find().toArray(function(err1, items1) {
			  //console.log(items);
			  res.send([items, items1]);
			});
		  //res.send(items);
		});
	  //});
	});
	
  }
  else
  {
	console.log("pls start mongo DB");
  }
  
});

var server = http.createServer(app)
server.listen(8001);
