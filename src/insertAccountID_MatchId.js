var MongoClient = require('mongodb').MongoClient
var assert = require('assert');
var exec = require('child_process').exec;
var asyn = require('async');
 
var getAccountID = require("./getAccountIDs.js"); 
// Connection URL 
var url = 'mongodb://localhost:27017/dota2';
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
 
  insertDocuments(db, function(code) {
    db.close();
	console.log("insertion done with "+code+" error");
  });
});




var insertDocuments = function(db, callback) {
  // Get the documents collection 
  //var collection = db.collection('accountIDS');
  var collection = db.collection('matchID');
	var oldData_ite = collection.find();
	var oldData = null;
	 //console.log(oldData_ite);
	 oldData_ite.each(function(err,doc){
		if(doc != null){
		oldData = doc;
		//console.log(oldData["id"]);
		var matchID_array = [];
			for(var i in oldData["id"]){
			//console.log("---"+oldData["id"][i]);
			matchID_array.push(oldData["id"][i]);
			matchID_array.push(oldData["id"][i]);
			}
			console.log(matchID_array.length);
			asyn.each(matchID_array, 5, function(err){
			getAccountID.getMatchids(matchID_array[ite],function(err,data){});
			});
			
		}
	});
	
	
	
 
  

}
