const { listarTransacoes, adicionarTransacoes } = require('../models/transacaoModels');

const getTransacoes = (req, res) => {
    res.json(listarTransacoes());

}

const postTransacoes = (req, res) = {
    
}