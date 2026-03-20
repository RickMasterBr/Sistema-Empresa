const { DataTypes } = require('sequelize');
const sequelize = require('../server/db');

const Funcionario = sequelize.define('funcionario', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false
    },
    funcao: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'funcionarios',
    timestamps: false
  });

module.exports = funcionario;
