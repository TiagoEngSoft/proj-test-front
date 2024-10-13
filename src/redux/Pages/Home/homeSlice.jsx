import { createSlice } from '@reduxjs/toolkit';
import { get } from '../../../api/webCliente/WebClienteService';
import ApiEres from '../../../api/apiEres/rotasApiEres';
import FormMoeda from '../../../util/Moedas';

//Estado estruturado da tela de home
let initialState = {
    cardsTopo: {
        cards: [],
        loading: false,
        error: null,
    },
    mapa: {
        utimasLocalizacoes: [],
        loading: false,
        error: null,
    },
    vendedores: {
        vendSelec: null,
        listaVed: [],
        loading: false,
        error: null,
    }
};

// ===   Busca de info cards topo   ========
export let dadosCards = [
    { icon: 'bx-calendar-check', value: '533', label: 'Vendidos hoje', comtab: false },
    {},
    {},
    { icon: 'bx-line-chart', value: 'R$ 50.000,00', label: 'Meta do dia', comtab: false }
];

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        //Cards Topo =====================================
        buscaDadosCardTopo(state) {
            state.cardsTopo.loading = true;
            state.cardsTopo.error = null;
        },
        montaCardsTopo(state) {
            state.cardsTopo.loading = true;
            state.cardsTopo.error = null;
        },
        sucessoMontagemCards(state, action) {
            state.cardsTopo.loading = false;
            state.cardsTopo.cards = action.payload;
        },
        sucessoBuscaDadosCardsTop(state, action) {
            state.cardsTopo.loading = false;
            state.cardsTopo.cards = action.payload;
        },
        falhaMontagemCards(state, action) {
            state.cardsTopo.loading = false;
            state.cardsTopo.error = action.payload;
        },
        falhaBuscaDadosCardsTop(state, action) {
            state.cardsTopo.loading = false;
            state.cardsTopo.error = action.payload;
        },

        //Mapa  =====================================
        buscandoHistoricoLocaisVendSelect(state) {
            state.mapa.loading = true;
            state.mapa.error = null;
        },
        sucessoBuscaLocaisVendSelect(state, action) {
            state.mapa.loading = false;
            state.mapa.utimasLocalizacoes = action.payload;
        },
        falhaBuscaLocaisVendSelect(state, action) {
            state.mapa.loading = false;
            state.mapa.error = action.payload;
        },

        //Vendedores =====================================
        buscandoVendedores(state) {
            state.vendedores.loading = true;
            state.vendedores.error = null;
        },
        sucessoBuscaVendedores(state, action) {
            state.vendedores.loading = false;
            state.vendedores.listaVed = action.payload;
            if (state.vendedores.listaVed.length > 0) {
                state.vendedores.vendSelec = state.vendedores.listaVed[0];
            }
        },
        falhaBucaVendedores(state, action) {
            state.vendedores.loading = false;
            state.vendedores.error = action.payload;
        },
        configuraVendedorSelecionado(state, action) {
            state.vendedores.vendSelec = action.payload;

            //Troca vendedores de pos
            state.vendedores.listaVed.forEach((vend, index) => {
                if (vend.CONTAID == action.payload.CONTAID) {
                    state.vendedores.listaVed[index] = state.vendedores.listaVed[0];
                    state.vendedores.listaVed[0] = action.payload;
                }
            })

            console.log('Primeiro da lista: ' + state.vendedores.listaVed[0].CONTAID);
        },
    },
});

// Async Thunk que listena os estados visando reatividade
export const buscaInfoCardsTopoListner =
    (onSuccess, onError) => async (dispatch) => {
        dispatch(buscaDadosCardTopo());
        try {
            //Com range
            const respCardMes = await buscaInfoCardsTopoF(ApiEres.resulmoFlex({
                di: '2024-01-01',//calcularDatas({ db: true }).primeiroDiaDoMes,
                df: '2024-04-11',//calcularDatas({ db: true }).diaAtualMenosUm,
                vend: 18231
            }));
            //Dia especifico
            const respcardDia = await buscaInfoCardsTopoF(ApiEres.resulmoFlex({
                di: '2024-01-27',
                vend: 18231
            }));
            await montaCardMesFlex(respCardMes.dados.result);
            await montaCardDiaFlex(respcardDia.dados.result);
            onSuccess(respCardMes);

            // console.log('Cards mom: ' + (await cardsMon).length);
            dispatch(sucessoBuscaDadosCardsTop(dadosCards));
        } catch (error) {
            dispatch(
                falhaBuscaDadosCardsTop("Erro ao buscar dados cards topo: " + error));
            onError(error);
        }
    };

// Função para buscar os dados card
const buscaInfoCardsTopoF = async (pointApi) => {
    try {
        const dados = await get(pointApi);
        console.log('Sucesso no carregamento dados cards:', dados);
        return dados;
    } catch (error) {
        console.error('Falha no carregamento dados cards', error);
    }
};

const montaCardMesFlex = async (dados) => {
    //TODO: Refatorar par uma fun
    const totVendaComDev = dados.reduce((acumulador, produto) => {
        return acumulador + produto.TOTAL_VENDA_COM_DEV;
    }, 0);
    const totVendaComDevTbp = dados.reduce((acumulador, produto) => {
        return acumulador + produto.TOTAL_VENDA_COM_DEV_TBP;
    }, 0);
    const flex = dados.reduce((acumulador, produto) => {
        return acumulador + produto.FLEX;
    }, 0);

    const montaTabCard = FormMoeda.formatBRLSC;
    adcElemList(dadosCards, {
        icon: 'bx-dollar',
        value: FormMoeda.formatBRL(flex),
        label: 'Flex do mês',
        tab: {
            prcVen: montaTabCard(totVendaComDev),
            prcTbp: montaTabCard(totVendaComDevTbp),
            flex: montaTabCard(flex),
        },
        comtab: true,
        comDataRange: true
    }, 1)
}

const montaCardDiaFlex = async (dados) => {

    //TODO: Refatorar par uma fun
    const totVendaComDev = dados.reduce((acumulador, produto) => {
        return acumulador + produto.TOTAL_VENDA_COM_DEV;
    }, 0);
    const totVendaComDevTbp = dados.reduce((acumulador, produto) => {
        return acumulador + produto.TOTAL_VENDA_COM_DEV_TBP;
    }, 0);
    const flex = dados.reduce((acumulador, produto) => {
        return acumulador + produto.FLEX;
    }, 0);

    const montaTabCard = FormMoeda.formatBRLSC;
    adcElemList(dadosCards, {
        icon: 'bx-dollar',
        value: FormMoeda.formatBRL(flex),
        label: 'Flex do dia',
        tab: {
            prcVen: montaTabCard(totVendaComDev),
            prcTbp: montaTabCard(totVendaComDevTbp),
            flex: montaTabCard(flex),
        },
        comtab: true,
        comData: true
    }, 2);
}

function adcElemList(lista, elemento, posicao) {
    // Verificar se a posição está dentro dos limites da lista
    if (posicao >= 0 && posicao <= lista.length) {
        // Substituir o elemento na posição especificada
        lista.splice(posicao, 1, elemento);
    } else {
        console.error('Posição inválida');
    }
    return lista;
}

// =====================   Busca de vendedores   ==========================================
// Async Thunk que listena os estados visando reatividade
export const buscaVendedoresListner =
    (onSuccess, onError) => async (dispatch) => {
        dispatch(buscandoVendedores());
        try {
            const vendedoresDB = await buscarVendedoresF();
            dispatch(sucessoBuscaVendedores(vendedoresDB.dados.result));
            onSuccess(vendedoresDB)
        } catch (error) {
            dispatch(
                falhaBucaVendedores("Erro ao buscar vendedores"));
            onError(error);
        }
    };

// Função para buscar os vendedores
const buscarVendedoresF = async () => {
    try {
        const vendedores = await get(ApiEres.rotaVendedores);
        console.log('Vendedores buscados com sucesso:', vendedores);
        return vendedores;
    } catch (error) {
        console.error('Erro ao buscar vendedores:', error);
    }
};

//Configura vendedor selecionado barra pesquisa e primeiro da lista vendedores
export const configuraVendedorSelecionadoF = (dispatch, listaVed, vendSelec) => {
    try {
        if (listaVed.length > 0) {
            if (vendSelec) {
                dispatch(configuraVendedorSelecionado(
                    encontrarVendedorPorNome(vendSelec, listaVed)));
            } else {
                console.log('Informe o vendedor corretamente!');
            }
        } else {
            console.log("Lista sem vendedores");
        }
    } catch (error) {
        console.log('Erro ao selecionar o vendedor!: ' + error);
    }
};

const encontrarVendedorPorNome = (string, listaVendedores) => {
    if (typeof string !== 'string') {
        throw new Error('O parâmetro "string" deve ser uma string.');
    }
    const [nome, id] = string.split(' - '); // Divide a string em nome e ID
    for (const vendedor of listaVendedores) {
        if (vendedor.NOME === nome && vendedor.CONTAID === parseInt(id)) {
            return vendedor;
        }
    }
    return null;
};

// =====================   Busca localizacoes   ==========================================
// Async Thunk que listena os estados visando reatividade
export const buscaUltimasLocalizacoesVendList =
    (onSuccess, onError, onConversor, vendSelect) => async (dispatch) => {
        dispatch(buscandoHistoricoLocaisVendSelect());
        try {
            if(vendSelect) console.log('Vendedor select: ' + vendSelect.NOME);
            const resposta = await buscaUltimasLocalizacoesF(vendSelect);
            dispatch(sucessoBuscaLocaisVendSelect(await onConversor(resposta.dados)));
            onSuccess(resposta)
        } catch (error) {
            dispatch(
                falhaBuscaLocaisVendSelect("Erro ao buscar localizações: " + error));
            onError(error);
        }
    };

// Função para buscar os pontos de latitude e longitude
const buscaUltimasLocalizacoesF = async (vendSelect) => {
    let rotas
    try {
        if (vendSelect) {
            if (vendSelect.CONTAID == 33) {
                rotas = await get(ApiEres.histDiaVendedor(vendSelect.CONTAID ));
                return rotas
            }
        }
        rotas = await get(ApiEres.histDiaVendedor({}));
        return rotas;
    } catch (error) {
        console.error('Erro ao buscar do historico de rotas!: ', error);
    }
};

export const {
    buscaDadosCardTopo,
    montaCardsTopo,
    falhaMontagemCards,
    falhaBuscaDadosCardsTop,
    sucessoBuscaDadosCardsTop,
    buscandoHistoricoLocaisVendSelect,
    sucessoBuscaLocaisVendSelect,
    falhaBuscaLocaisVendSelect,
    buscandoVendedores,
    configuraVendedorSelecionado,
    sucessoBuscaVendedores,
    falhaBucaVendedores
} = homeSlice.actions;
export default homeSlice.reducer;