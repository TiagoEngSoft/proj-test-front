// Função para adicionar 1 dia a uma data
export function adicionarUmDia(data) {
    const dataNova = new Date(data);
    dataNova.setDate(dataNova.getDate() + 1);
    return dataNova;
}

// Função para subtrair 1 dia de uma data
export function subtrairUmDia(data) {
    const dataNova = new Date(data);
    dataNova.setDate(dataNova.getDate() - 1);
    return dataNova;
}

//Operacoes com data - primeiro dia do mes, ontem e hoje - BRL e db
export function calcularDatas({db = false}) {
    const hoje = new Date();
    const primeiroDiaDoMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
    const diaAtualMenosUm = new Date(hoje.getTime() - (24 * 60 * 60 * 1000));

    const formatarData = (data) => {
      const ano = data.getFullYear();
      let mes = (data.getMonth() + 1).toString().padStart(2, '0');
      let dia = data.getDate().toString().padStart(2, '0');
      if (db) {
        return `${ano}-${mes}-${dia}`;
      }
      return `${dia}/${mes}/${ano}`;
    };

    return {
      hoje: formatarData(hoje),
      primeiroDiaDoMes: formatarData(primeiroDiaDoMes),
      diaAtualMenosUm: formatarData(diaAtualMenosUm),
      primeiroDiaDoMesBRL: primeiroDiaDoMes.toLocaleDateString('pt-BR'),
      diaAtualMenosUmBRL: diaAtualMenosUm.toLocaleDateString('pt-BR'),
    };
}