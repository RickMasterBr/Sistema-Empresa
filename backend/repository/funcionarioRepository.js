const Funcionario = require('../server/db.js');  // importa funcionario

// funcao para listar todos
const listar = async () => {
    return await Funcionario.findAll();
};

// funcao para buscar por id
const buscarPorId = async (id) => {
    return await Funcionario.findByPk(id);
}

// funcao para cadastrar
const cadastrar = async (dadosFuncionario) => {
    return await Funcionario.create(dadosFuncionario);
}

module.exports = {
    listar,
    buscarPorId,
    cadastrar
}