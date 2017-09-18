var http = require("https");

var options = {
  "method": "GET",
  "hostname": "api.steampowered.com",
  "port": null,
  "path": "/IDOTA2Match_570/GetMatchHistory/V001?account_id=133418914&key=3554E0FABCA4DA85290174E4F9B199BA",
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
    console.log(body.toString());
  });
});

req.end();