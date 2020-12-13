var http = require('http');

http.createServer(function(req, res){
    res.end("Hello World! Welcome to my website");
}).listen(8081);
/**
 *  abrindo o servidor com o createServe e ouvir na porta
 * 8081 
 */

 console.log("O servidor está rodando!");