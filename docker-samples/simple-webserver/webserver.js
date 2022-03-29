var express = require('express');
var app     = express();

var port = process.env.PORT || 8080

app.get('/', function(req, res) {
    res.sendfile('index.html');
});

app.listen(port);

console.log('Start Webserver on port:' + port);