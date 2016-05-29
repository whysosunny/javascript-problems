var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname + 'public/index.html'));
});