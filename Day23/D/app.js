const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())

var arr = [1,2,3,5]

let sum = arr.reduce(function(a,n){
    return a + n
},0);

app.get('/',(req,res)=>{
	res.send('hello');
});

app.post('/result', function(req,res){
    req.body = arr;
    console.log(req.body);
    console.log(res.json(req.body));
    res.json({sum: sum});
});

app.listen(8080);

