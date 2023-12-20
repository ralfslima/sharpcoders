// Express -> Framework (npm i express)
// Nodemon -> Executar projeto (npm i nodemon)

// Importações
const express = require('express');

// Objeto app (responsável pelas rotas)
const app = express();

// Rotas
app.get('/', function(req, res){
    res.write('Hello World!');
    res.end();
});

// Rota do servidor
app.listen(8080);