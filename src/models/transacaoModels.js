let transacoes = []

const listarTransacoes = () => transacoes;


const adicionarTransacoes = (transacao) => {
    transacao.id = transacao.length + 1;
    transacoes.push(transacao)
    return transacao;
}