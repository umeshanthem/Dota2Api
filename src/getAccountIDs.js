var http = require("https");

module.exports = {
getMatchids : function(matchID,cb){
var options = {
  "method": "GET",
  "hostname": "api.opendota.com",
  "port": null,
  "path": "/api/matches/"+matchID+"/?key=3554E0FABCA4DA85290174E4F9B199BA",
  "headers": {
    "cache-control": "no-cache"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    //console.log(body.toString());
	var str_body = body.toString();
	var result = JSON.parse(str_body);
	var accountIDs = [];
	var players = result["players"];
	//console.log()
	for(var i in players){
		//console.log(players[i]["account_id"]);
		accountIDs.push(players[i]["account_id"]);
	}
	cb(null,matchID);
	
  });
});

req.end();

}
};