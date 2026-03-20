const express = require ('express'); // importa express 
const cors = require('cors'); // importa cors para permitir comunicação frontend
const sequelize = require('./server/db.js'); // importa sequelize para conexão com banco de dados
const funcionarioController = require('./controller/funcionarioController'); 

const app = express(); // incia o express
const PORT = 3071; // define a porta do servidor

app. use(express.json()); // permite o uso de JSON nos metodos
app.use(cors()); // comunicação com front

app.use('/funcionarios', funcionarioController); // define a rota para funcionários

async function startServer() {

    try {
        await sequelize.authenticate(); // tenta conectar ao banco de dados
        console.log('conexão com Banco de dados mySql Estabelecida');

        await sequelize.sync(); // cria a tabela no banco de dados se ela nao existir

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error('erro ao iniciar o servidor:', error);
    }
}

startServer(); 