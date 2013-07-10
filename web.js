var express = require('express');

var app = express.createServer(express.logger());

var infile = "index.html";

var buf = fs.readFileSync(infile);

var out = buf.toString('utf-8', 0, 27);

app.get('/', function(request, response) {
  response.send('provaprova');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
