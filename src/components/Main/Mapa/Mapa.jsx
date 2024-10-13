import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buscaUltimasLocalizacoesVendList } from '../../../redux/Pages/Home/homeSlice';
import "./MapaStyled.jsx";
import MapComponent from "./MapApi";
import { RecentOrdersContainer } from "./MapaStyled.jsx";
import MapLoadingPlaceholder from "./MapaLoader.jsx";

const Mapa = () => {
  const dispatch = useDispatch();
  const { loading, error, utimasLocalizacoes } = useSelector(state => state.home.mapa);
  const { vendSelec } = useSelector(state => state.home.vendedores)

  useEffect(() => {
    dispatch(buscaUltimasLocalizacoesVendList(
      (resposta) => { },
      (erro) => { },
      mapearLocalizacoes,
      vendSelec
    ));
  }, [dispatch, vendSelec]);

  const mapearLocalizacoes = (locs) => {
    if (locs) {
      return locs.map((loc, index) => ({
        id: index + 1,
        name: `Localização ${index + 1}`,
        position: {
          lat: loc.latitude,
          lng: loc.longitude
        }
      }));
    }
    return []
  }

  return (
    <RecentOrdersContainer>
      <div className="cardHeader">
        <h2>Geolocalização</h2>
      </div>
      {loading && <MapLoadingPlaceholder />}
      {error && <div>Erro ao carregar as localizações: {error}</div>}
      {!loading && !error && utimasLocalizacoes && utimasLocalizacoes.length > 0 ? (
        <MapComponent localizacoes={utimasLocalizacoes} />
      ) : (
        <div>Nenhuma localização encontrada.</div>
      )}
    </RecentOrdersContainer>

  );
};

export default Mapa;
