var MongoClient = require('mongodb').MongoClient
var assert = require('assert');
var exec = require('child_process').exec;
var asyn = require('async');
var quequ = require('./queue_test.js');
var getAccountID = require("./getAccountIDs.js");
var sleep = require('system-sleep');
var fs = require('fs');
// Connection URL 
// var url = 'mongodb://localhost:27017/dota2';
var url = "mongodb://umeshravuru:Vedavathi_1@cluster0-shard-00-00-xaakj.mongodb.net:27017,cluster0-shard-00-01-xaakj.mongodb.net:27017,cluster0-shard-00-02-xaakj.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
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
		if(doc != null) {
            oldData = doc;
            //console.log(oldData["133418914"]);
            var matchID_array = [];
            // for (var i in oldData["id"]) {
            //     //console.log("---"+oldData["id"][i]);
            //     matchID_array.push(oldData["id"][i]);
            // }
            // console.log(matchID_array.length);
            // asyn.each(matchID_array, 5, function (err) {
            //     getAccountID.getMatchids(matchID_array[ite], function (err, data) {
            //     });
            // });
            var _matchID_json = {};
            fs.writeFile('AccountIDs.txt','data');
            fs.writeFile('AccountIDs1.txt','data');
            var q = asyn.queue(function (id, callback) {
                getAccountID.getMatchids(id, function (err, data) {
                  //  console.log(id);
                    if(err)
                        console.log(err);
                    else {
                        fs.appendFile('AccountIDs.txt',id+" - ");
                        for (var mID in data) {
                            //console.log(data[mID]);
                            fs.appendFile('AccountIDs.txt',data[mID]+"|");
                            if (data[mID] != null) {
                                if (_matchID_json[data[mID]] == null)
                                    _matchID_json[data[mID]] = 1;
                                else
                                    _matchID_json[data[mID]] = _matchID_json[data[mID]] + 1;
                            }
                        }
                        fs.appendFile('AccountIDs.txt',"\n");
                    }
                   // sleep(10);
                    callback();
                    //console.log(_matchID_json);

                });

            }, 1);
            // console.log(oldData["133418914"]);
            for (var i in oldData["133418914"]) {
                //console.log(i);
                q.push(oldData["133418914"][i], function (err) {
                   // sleep(1);
                });
            }

            q.drain = function(){
                //console.log(_matchID_json);
                console.log("All MatchID's were converted to AccountID's");
            };
        }

	});
	
	
	
 
  

}
