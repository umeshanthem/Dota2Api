var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var uri = "mongodb://umeshravuru:Vedavathi_1@cluster0-shard-00-00-xaakj.mongodb.net:27017,cluster0-shard-00-01-xaakj.mongodb.net:27017,cluster0-shard-00-02-xaakj.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
MongoClient.connect(uri, function(err, db) {
    if(err)
        console.log(err);
    else {
        console.log(db);
        var collection = db.collection('documents');
        collection.insertMany([
            {a: 1}, {a: 2}, {a: 3}
        ], function (err, result) {
            assert.equal(err, null);
            assert.equal(3, result.result.n);
            assert.equal(3, result.ops.length);
            console.log("Inserted 3 documents into the document collection");
        });
    }
    db.close();
});