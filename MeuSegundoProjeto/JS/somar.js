/**
 * Essa função é feita para teste de criação de modulos 
 * externos, para ser usada dentro de outro script
 * @param {} a primeiro parâmetro 
 * @param {*} b segundo parâmetro
 * retorna a soma de a e b
 */

var soma = function (a, b){
    return a + b;
}

/**
 * Para que o nosso código funcione na aplicação principal
 * além de importar temos que lembrar de exportar também, 
 * ou seja, deixar o nossom código visível parra a 
 * aplicação principal. Pfara fazermos isso utilizamos o:
 */
module.exports = soma;
