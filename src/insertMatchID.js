var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
 
var getmatchid = require("./getMatcheID.js"); 
// Connection URL
var url = "mongodb://umeshravuru:Vedavathi_1@cluster0-shard-00-00-xaakj.mongodb.net:27017,cluster0-shard-00-01-xaakj.mongodb.net:27017,cluster0-shard-00-02-xaakj.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
//var url = 'mongodb://localhost:27017/dota2';
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
  var collection = db.collection('matchID');
  // Insert some documents 
  var insertObj = getmatchid.getMatchids(function(err,data){
	  if(err)
		  throw err;
	  else{
		  //console.log("sa"+data);
		  //var document_len = JSON.stringify(collection.count({}));
		  collection.count(function(err, count){
			 //console.log("----"+count);
			 if(err)
			 {
				 console.log(err);
				 throw err;
			 }
			 if(count == 1)
			 {
				 var oldData_ite = collection.find();
				 var oldData = null;
				 //console.log(oldData_ite);
				 oldData_ite.each(function(err,doc){
					 if(doc != null){
					 oldData = doc;
				 
				//console.log("umehs");
				collection.updateOne(
				{"133418914":oldData},{$set:{"133418914":data}},
				function(err,result){
					console.log("Updated");
					callback(null);
				});
					 }
				});
			
			 }
			 else{
				 
				  collection.insert([
						{"133418914" : data}
						], function(err, result) {
					if(err)
						callback(err);
					else{
						assert.equal(err, null);
						console.log("Inserted matchID's in to matchID collection");
						callback(null);
					}
	
				});
			 }
			  
		  });
		  //console.log("-------"+document_len);
 
	  }
  });
}

