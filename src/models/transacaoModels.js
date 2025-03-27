let transacoes = []

const listarTransacoes = () => transacoes;


const adicionarTransacoes = (transacao) => {
    transacao.id = transacao.length + 1;
    transacoes.push(transacao)
    return transacao;
}

const deletarTransacoes = () => {
    transacoes = []
};

const calcularEstatistica = () => {
    const agora  = Date.now();
    const ultimos60Segundos = transacoes.filter(t => (agora - new Date (t.dataHora).getTime))

    if(ultimos60Segundos.length === 0){
        return { cont: 0, sum: 0, avg: 0, min: 0, max: 0};

    }

    const valores = ultimos60Segundos.map(i => t.valor);
    const sum = valores.reduce((acc, val) => acc + val, 0);
    const avg = sum / valores.length;
    const min = Math.min(...valores);
    const max = Math.max(...valores);
    const count = valores.length



    return {
        count, 
        sum: parseFloat(sum.toFixed(2)),
        avg: parseFloat(avg.toFixed(2)),
        min: parseFloat(min.toFixed(2)),     
        max: parseFloat(max.toFixed(2))
        
     };
    
    };

    module.exports = { listarTransacoes, calcularEstatistica, adicionarTransacoes, deletarTransacoes}
    