const express = require('express'); // importa express 
const cors = require('cors'); // importa cors para permitir comunicação frontend
const sequelize = require('./server/db.js'); // importa sequelize para conexão com banco de dados

const funcionarioController = require('./controller/funcionarioController'); 

const app = express(); // inicia o express
const PORT = 3071; // define a porta do servidor

app.use(cors()); 
app.use(express.json()); // permite o uso de JSON 

app.use('/funcionarios', funcionarioController); 


async function startServer() {
    try {
        await sequelize.authenticate(); // tenta conectar ao banco de dados
        console.log('Conexão com Banco de dados MySQL estabelecida');

        await sequelize.sync(); // cria a tabela no banco de dados se ela nao existir
        console.log('Tabelas do banco sincronizadas');

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error('Erro ao iniciar o servidor:', error);
    }
}

startServer();