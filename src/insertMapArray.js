var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/mydb";
var url = "mongodb://umeshravuru:Vedavathi_1@cluster0-shard-00-00-xaakj.mongodb.net:27017,cluster0-shard-00-01-xaakj.mongodb.net:27017,cluster0-shard-00-02-xaakj.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
module.export = {
  insertInDB : function (id, map, collec, cb) {
    // console.log("-------------");

    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var doc = { id: map };
      db.collection(collec).insertOne(doc, function (err, res) {
        if (err) {
          cb(err, null);
          throw err;
        }
        else {
          console.log("Inserted 1 document with id " + id);
          db.close();
          cb(null, 'success');
        }
      });
    });
  },
  disp : function () {
    console.log("working shi");
  }
};