var http = require("https");


module.exports = {
getMatchids : function(cb){

var options = {
  "method": "GET",
  "hostname": "api.opendota.com",
  "port": null,
  "path": "/api/players/133418914/matches/?key=3554E0FABCA4DA85290174E4F9B199BA",
  "headers": {
    "content-type": "application/x-www-form-urlencoded",
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
	var match_id = [];
	for( var i in result )
	{
		//console.log(result[i]["match_id"]);
		match_id.push(result[i]["match_id"]);
	}
	//console.log(result.length);
	var insert_data_str = JSON.stringify(match_id);
	var insert_data = JSON.parse(insert_data_str);
	//console.log(insert_data);
	cb(null,insert_data);
	
  });
});

req.end();
}
};