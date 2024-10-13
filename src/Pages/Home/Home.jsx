import React, { useState, useEffect } from 'react';
import LocalPage from "../../components/Main/LocalPage/LocalPage";
import CardsTopo from "../../components/Main/CardsTop/CardsTopo";
import Mapa from "../../components/Main/Mapa/Mapa";
import Vendedores from "../../components/Main/Vendedores/Vendedores";
import ContainerMapVend from "../../components/Main/ContainerMapVend/ContainerMapVend";
import CardsTopoLoader from '../../components/Main/CardsTop/CardsTopoLoad';
import { buscaInfoCardsTopoListner } from '../../redux/Pages/Home/homeSlice';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const [showLoader, setShowLoader] = useState(true);

  const { cards } = useSelector(state => state.home.cardsTopo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(buscaInfoCardsTopoListner(
      (dadosCards) => {
        console.log("Dados cards carregados: ", dadosCards)
      },
      (erroBuscaDados) => console.error("Erro ao buscar dados vendedores: ", erroBuscaDados),
    ));
    setShowLoader(false);

  }, [dispatch]);

  return (
    <>
      <LocalPage pontoPartida={'DashBoard'} />
      {showLoader ? (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          {Array.from({ length: 4 }).map((_, index) => (
            <CardsTopoLoader key={index} />
          ))}
        </div>
      ) : (<CardsTopo cards={cards} />)}
      <ContainerMapVend>
        <Mapa />
        <Vendedores />
      </ContainerMapVend>
    </>
  );
};

export default Home;