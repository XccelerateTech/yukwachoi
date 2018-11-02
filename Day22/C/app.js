var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    if(req.url === '/') {
        fs.createReadStream(__dirname + '/flower.html').pipe(res);
    } else if(req.url === '/flower-icon.png') {
        fs.createReadStream(__dirname + '/flower-icon.png').pipe(res);
    } else if(req.url === '/logo.png') {
        fs.createReadStream(__dirname + '/logo.png').pipe(res);
    } else if(req.url === '/payment-icon.png') {
        fs.createReadStream(__dirname + '/payment-icon.png').pipe(res);
    } else if(req.url === '/phone-icon.png') {
        fs.createReadStream(__dirname + '/phone-icon.png').pipe(res);
    } else if(req.url === '/truck-icon.png') {
        fs.createReadStream(__dirname + '/truck-icon.png').pipe(res);
    } else if(req.url === '/style.css') {
        fs.createReadStream(__dirname + '/style.css').pipe(res);
    } else if(req.url === '/script.js') {
        fs.createReadStream(__dirname + '/script.js').pipe(res);
    } else if(req.url === '/flowershop.jpg') {
        fs.createReadStream(__dirname + '/flowershop.jpg').pipe(res);
    } else if(req.url === '/app.js') {
        fs.createReadStream(__dirname + '/app.js').pipe(res);
    } else {
        res.writeHead(404);
        res.end();
    }

}).listen(8080, '127.0.0.1');