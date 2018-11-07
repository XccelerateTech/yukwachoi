var express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const path = require('path');
var fs = require('fs');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(fileUpload());

app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname,'index.html'));
});

app.post('/login',(req,res)=>{
	console.log(req.body);
	console.log(req.files);
    res.send("Login Information Received.");
    app.emit('info', req.body, req.files);
});

app.on('info', function(data1,data2) {
    fs.readFile(__dirname + data1, 'utf8', function(err, data) {
        if (err) throw err;
        console.log(JSON.parse(data));
    });
});


app.listen(8080);