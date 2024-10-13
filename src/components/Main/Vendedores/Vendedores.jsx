import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buscaVendedoresListner } from '../../../redux/Pages/Home/homeSlice';
import "./Vendedores.Style";
import FotoVend from '../../../assets/images/customer01.jpg'
import CardVendedorLoader from './VendedoresLoader';
import { ContainerVendedores } from "./Vendedores.Style";
import { configuraVendedorSelecionadoF } from '../../../redux/Pages/Home/homeSlice'

const Vendedores = () => {
  const dispatch = useDispatch();
  // Selecionando o estado dos vendedores do Redux store
  const { listaVed, loading, error } = useSelector(state => state.home.vendedores);

  useEffect(() => {
    //Pode ser feito com useSelector - mas sou do tempo da callback
    dispatch(buscaVendedoresListner(
      (vendedores) => console.log("Vendedores carregados: ", vendedores),
      (error) => console.error("Erro ao buscar vendedores: ", error),
    ));
  }, [dispatch]);

  const handleVendedorClick = (vendedor, listaVendedores) => {
    configuraVendedorSelecionadoF(dispatch, listaVendedores, vendedor);
  };

  return (
    <ContainerVendedores>
      <div className="cardHeader">
        <h2>Vendedores</h2>
      </div>
      {loading ? (
        <CardVendedorLoader />
      ) : error ? (
        <div>Erro ao carregar os vendedores: {error}</div>
      ) : (
        <div className="listaVendedores">
          <table>
            <tbody>
              {listaVed && Array.isArray(listaVed) && listaVed.map((vendedor, index) => (
                //TODO: Refatorar isso para aceitar varias assinaturas
                <tr key={index} className={index === 0 ? 'primeiroElemento' : ''} onClick={() => handleVendedorClick(`${vendedor.NOME} - ${vendedor.CONTAID}`, listaVed)}>
                  <td width="60px">
                    <div className="imgBx">
                      <img src={FotoVend} alt={vendedor.NOME} />
                    </div>
                  </td>
                  <td>
                    <h4>
                      {vendedor.NOME} <br /> <span>{`${vendedor.CONTAID} - ${vendedor.UF}`}</span>
                    </h4>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      )}
    </ContainerVendedores>
  );
};

export default Vendedores;
