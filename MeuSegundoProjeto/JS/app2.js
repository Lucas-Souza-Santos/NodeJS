const express = require("express");
const app = express();


app.get("/", function(req, res){
    res.send("Olá Mundo!");
});

app.get("/sobre", function(req, res){
    res.send("/index.html");
});

app.get("/blog", function(req, res){
    res.json({
        nome: "Lucas",
        sobrenome: "santos",
        idade: 78,
        peso: 345
    });
});

app.listen(8081, () =>  {
    console.log("Servidor Rodando");
});
