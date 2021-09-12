// Lê os dados do arquivo .env
require('dotenv').config();

const bd = require('./bd');
const boot = require('./bootstrap');
const express = require('express');
const cors = require('cors');

// Criação da aplicação
const app = express();

// Configuração do middleware do express
app.use(cors()); // permite requisições CORS de qualquer host
app.use(express.json()); // popula req.body
app.use(express.urlencoded());

// Configuração das rotas da aplicação
app.get('/', (req, res) => {
  res.send('Backend da loja');
});
app.use('/produtos', require('./controller/produtos_controller'));

const SERVER_PORT = parseInt(process.env.SERVER_PORT);

console.log('Conectando ao banco de dados...');
bd.conecta(() => {
  console.log('Executando funções de bootstrap ...');
  boot.bootstrap();
  console.log('Conectado. Iniciando o servidor web...');
  app.listen(SERVER_PORT, () => {
    console.log(`Servidor no ar em: http://localhost:${SERVER_PORT}`);
  });
});
