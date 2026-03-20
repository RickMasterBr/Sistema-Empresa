const express = require('express'); // Inicia o Express
const router = express.Router(); // roteador para definir rotas
const funcionarioRepository = require('../repository/funcionarioRepository');  // importa funcionario

//gets
router.get('/', async (req,res) => {
    try {
        const funcionarios = await funcionarioRepository.listar();
        res.json(funcionarios);
    } catch (error){
        res.status(500).json({ error: 'erro ao obter funcionarios'});
    }
});

//get funcionario por id
router.get('/:id', async (req, res) => {
    try {
        const funcionario = await funcionarioRepository.buscarPorId(req.params.id);
        if (funcionario) {
            res.json(funcionario);
        } else {
            res.status(404).json({ error: 'Funcionario nao encontrado'});
        }
    } catch (error) {
        res.status(500).json({ error: 'erro ao buscar funcionario'});
    }
});

// post
router.post('/', async (req, res) => {
    try {
        const { nome, cpf, funcao } = req.body;
        const novoFuncionario = await funcionarioRepository.cadastrar({ nome, cpf, funcao});
        res.status(201).json(novoFuncionario);
    } catch (error) {
        res.status(500).json ({error: 'erro ao criar livro'});
    }
});

module.exports = router; //exporta para ser usado