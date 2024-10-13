const porta = '3333';

const ApiEres = {
    //Login user
    loginUser: `http://localhost:${porta}/login`,
    regresh: `http://localhost:${porta}/refresh`,

    rotaVendedores: `http://localhost:${porta}/vendedores`,
    histDiaVendedor,
    resulmoFlex: urlResumoFlex
};

function histDiaVendedor(vendId = null) {
    return `http://localhost:${porta}/histLocVendedor?vendedorId=${vendId}`
}

function urlResumoFlex({ di = null, df = null, vend = 0 }) {
    return `http://localhost:${porta}/consultaFlex?vendedorId=${vend}&di=${di}&df=${df}`;
}

export default ApiEres;
