var fs = require('fs');
var express = require('express');
var app = express.createServer(express.logger());
var result="";

buf = new Buffer(256);

app.get('/', function(request, response) {

 
  fs.readFile('index.html', function (err, data) {
    if (err) throw err;
    response.write(data);   
  });

  //response.send('Hello World 2!');

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
