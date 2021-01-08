const express = require("express");
const app = express();


app.get("/", (req, res) =>{
    res.send("Teste de Servidor");
});

app.get("/ola", (req, res) => {
    let nome = req.query["nome"];
    let idade = req.query["idade"];
    let peso = req.query["peso"];
    res.send(`Olá ${nome}, você tem ${idade} anos e pesa
    ${peso} kg.`);
    // só consegui enviar o send um vez dentro de uma rota
});

app.listen(8081, () =>{
    console.log("Servidor online");
});

