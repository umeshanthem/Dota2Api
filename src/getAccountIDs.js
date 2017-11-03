var http = require("https");
var fs = require('fs');
module.exports = {
  getMatchids: function (matchID, cb) {
    // console.log("--"+matchID);
    var options = {
      "method": "GET",
      "hostname": "api.opendota.com",
      "port": null,
      "path": "/api/matches/" + matchID + "/?key=3554E0FABCA4DA85290174E4F9B199BA",
      "headers": {
        "cache-control": "no-cache"
      }
    };

    var req = http.request(options, function (res) {
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("error", function (err) {
        console.log(err);
        cb(err, null);
      });
      res.on("end", function () {

        var body = Buffer.concat(chunks);
        //console.log(body.toString());
        try {
          var str_body = body.toString();
          var result = JSON.parse(str_body);
          var accountIDs = [];
          var players = result["players"];
          //console.log()
          var wri = matchID + " - ";
          for (var i in players) {
            //console.log(players[i]["account_id"]);
            // fs.appendFile('AccountIDs1.txt',players[i]["account_id"]+"|");
            wri = wri + players[i]["account_id"] + "|";
            accountIDs.push(players[i]["account_id"]);
          }
          wri = wri + "\n";
          if (wri.length < 15)
            console.log(result);
          fs.appendFile('AccountIDs1.txt', wri);
          cb(null, accountIDs);
        }
        catch(e){
          console.log("api return non Json Response");
          sleep(10000);
        }
      });
    });

    req.end();

  }
};