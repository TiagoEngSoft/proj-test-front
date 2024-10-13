//Formata moeda para o padrão brasileiro
function formatBRL(numero) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(numero);
}

function formatBRLSC(numero) {
    return new Intl.NumberFormat('pt-BR').format(numero);
}
export default { formatBRL, formatBRLSC }