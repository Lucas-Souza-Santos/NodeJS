// trazendo o arquivo express para meu script
var express = require('express');

// criando uma instancia do express
var app = express()

app.set('view engine', 'ejs');

app.get('/home', (req, res) => {
    res.render("../views/home");
})

app.get('/', function(req, res){
    res.json({
        nome: 'Lucas de souza santos',
        idade: 28,
        peso: 82.4
    });
});

app.get('/form/:nome/:sobrenome?', function(req, res){
    res.send('<h1>' + req.params.nome + ' ' + req.params.sobrenome +'</h1>');
});

app.listen(3000, function(){
    console.log('Ouvindo na porta 3000');
})
