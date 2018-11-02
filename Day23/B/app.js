var express = require('express');
var app = express();

// const path = require('path');

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/flower.html');
});

app.listen(8080);