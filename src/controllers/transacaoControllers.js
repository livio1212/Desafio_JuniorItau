const { listarTransacoes, adicionarTransacao, calcularEstatistica } = require('../models/transacaoModels');

const getTransacoes = (req, res) => (
    res.json(listarTransacoes())
);

const postTransacoes = (req, res) => {
    const { valor, dataHora } = req.body;

    if(!valor || !dataHora){
        return res.status(400).json({erro: "Os campos valor e dataHora sao obrigatorios"})
    }

    const data = new Date(dataHora);

    if(isNaN(data.getTime())){
        return res.status(400).json({erro:"formato de data invalida, utilize a iso 8601" })
    }

    const novaTransacao = adicionarTransacao({valor, dataHora: data.toISOSring()});

    res.status(200).json(novaTransacao);


}

const deletarTransacoes = (req, res) => {
    deletarTransacoes();
    res.status(204).send();
};

const getEstatistica = (req, res) => {
    res.json(getEstatistica())
}

module.exports = {getTransacoes, postTransacoes, deletarTransacoes, getEstatistica}



