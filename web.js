
var fs = require('fs');
var express = require('express');
var app = express.createServer(express.logger());
var result="";


app.get('/', function(request, response) {

   var buf = new Buffer(fs.readFileSync('index.html','utf8'));
   response.send(buf.toString());

}); 
 
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
