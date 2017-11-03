var MongoClient = require('mongodb').MongoClient
var assert = require('assert');
var exec = require('child_process').exec;
var asyn = require('async');
//var quequ = require('./queue_test.js');
var getAccountID = require("./getAccountIDs.js");
var sleep = require('system-sleep');
var fs = require('fs');
// Connection URL 
// var url = 'mongodb://localhost:27017/dota2';
var url = "mongodb://umeshravuru:Vedavathi_1@cluster0-shard-00-00-xaakj.mongodb.net:27017,cluster0-shard-00-01-xaakj.mongodb.net:27017,cluster0-shard-00-02-xaakj.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
// Use connect method to connect to the Server 
MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    insertDocuments(db, function (code) {
        db.close();
        console.log("insertion done with " + code + " error");
    });
});




var insertDocuments = function (db, callback) {
    // Get the documents collection 
    //var collection = db.collection('accountIDS');
    var collection = db.collection('matchID');
    var oldData_ite = collection.find();
    var oldData = null;
    //console.log(oldData_ite);
    oldData_ite.each(function (err, doc) {
        if (doc != null) {
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
            fs.writeFile('AccountIDs.txt', 'data');
            fs.writeFile('AccountIDs1.txt', 'data');
            var MIDcollection = db.collection('insertedMatchID');
            var MIDdata = MIDcollection.find();
            var AIDdict = MIDcollection.find();
            var q = asyn.queue(function (id, callback) {
                getAccountID.getMatchids(id, function (err, data) {
                    AIDdict[id] = 1;
                    //  console.log(id);
                    if (err)
                        console.log(err);
                    else {
                        fs.appendFile('AccountIDs.txt', id + " - ");
                        for (var mID in data) {
                            //console.log(data[mID]);
                            fs.appendFile('AccountIDs.txt', data[mID] + "|");
                            if (data[mID] != null) {
                                if (_matchID_json[data[mID]] == null)
                                    _matchID_json[data[mID]] = 1;
                                else
                                    _matchID_json[data[mID]] = _matchID_json[data[mID]] + 1;
                            }
                        }
                        fs.appendFile('AccountIDs.txt', "\n");
                    }
                    sleep(350);
                    callback();
                    //console.log(_matchID_json);

                });

            }, 1);
            // console.log(oldData["133418914"]);
            for (var i in oldData["133418914"]) {
                //console.log(i);
                if (MIDcollection.find()["133418914"] == undefined) {
                    var str = String(oldData["133418914"][i]);
                    var tem = { str: "1"};
                    MIDcollection.insert([
						{"133418914" : tem}
						], function(err, result) {
					if(err)
						callback(err);
					else{
						assert.equal(err, null);
						console.log("Insetion of 1st record is done");
						callback(null);
					}
	
				});
                    q.push(oldData["133418914"][i], function (err) {
                        // sleep(1);
                    });
                }
                else {
                    console.log(MIDdata["133418914"]);
                    if (MIDdata["133418914"].get(oldData["133418914"][i]) == null) {
                        q.push(oldData["133418914"][i], function (err) {
                            // sleep(1);
                        });
                    }
                }
            }
            q.drain = function () {
                //console.log(_matchID_json);
                MIDcollection.updateOne(
                    { "133418914": MIDdata }, { $set: { "133418914": AIDdict } },
                    function (err, result) {
                        console.log("Updated");
                        callback(null);
                    });
                console.log("All MatchID's were converted to AccountID's");
            };
        }

    });






}
