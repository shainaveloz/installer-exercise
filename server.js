const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/js'));
app.use('/js',  express.static( path.join(__dirname, '/views')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '/views', 'index.html'));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log("Listening on %d", PORT);
});