var express = require('express'),
  app = express(),
  fs = require('fs'),
  path = require('path'),
  port = process.env.PORT || 3000;

app.use(express.logger());

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.listen(port);
console.log('Listening on port ' +  port);