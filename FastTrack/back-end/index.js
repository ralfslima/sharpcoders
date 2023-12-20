// Express -> Framework (npm i express)
// Nodemon -> Executar projeto (npm i nodemon)
// JSONWEBTOKEN -> JWT (npm i jsonwebtoken)
// CORS -> Segurança dos navegadores, para não realizar requisições em portas diferentes (npm i cors)

// Importações
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors')

// Objeto app (responsável pelas rotas)
const app = express();

// Informar ao sistema, que o CORS deverá ser habilitado
app.use(cors());

// Ter acesso a um objeto via requisição
app.use(express.json());

// Rotas
app.post('/', function(req, res){

    // Obter dados via body
    let usuario = req.body.usuario;
    let senha = req.body.senha;

    // Condicional
    if(usuario === 'Ralf' && senha === 123){
        // Criar token
        let gerarToken = jwt.sign({'usuario':usuario}, 'ima', {expiresIn:'1m'});

        // Retorno
        res.status(200).json({'token':gerarToken});
    }else{
        // Retorno
        res.status(400).json({'msg':'Usuário ou senha incorretos'});
    }

});

app.get('/teste', function(req, res){
    res.write('teste');
})

app.get('/', function(req, res){
    // Obter token via Bearer
    const bearer = req.headers['authorization'];

    // Validar token
    if(bearer == undefined){
        res.status(401).json({'msg':'É necessário informar um token'});
    }else{
        // Separar a estrutura do token enviado
        let tokenEnviado = bearer.split(' ');

        // Validar token
        jwt.verify(tokenEnviado[1], 'ima', (erro) => {
            if(erro){
                res.status(401).json({'msg':'Token inválido'});
            }else{
                res.status(200).json({'msg':'Token validado!'});
            }
        });

    }

});

// Rota do servidor
app.listen(8080);