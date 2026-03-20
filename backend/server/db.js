const { Sequelize } = require('sequelize'); // importa Sequelize para gerenciar o banco de dados

const sequelize = new Sequelize('empresa', 'root', 'alunolab', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3303

});

module.exports = sequelize; // exporta a instância do Sequelize para ser usada em outros arquivos do projeto