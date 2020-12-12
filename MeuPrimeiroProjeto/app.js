var express = require('express');
var app = express()

app.get('/', function(req, res){
    res.send('Aló, Mundo!');
});

app.listen(3000, function(){
    console.log('Ouvindo na porta 3000');
})
