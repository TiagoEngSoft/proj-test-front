import React from 'react';
import './LocalPageStyled';
import { Link, useLocation } from 'react-router-dom';
import { HeaderContainer } from './LocalPageStyled';

const LocalPage = ({ pontoPartida, }) => {
  const location = useLocation();
  const { pathname } = location;

  // Divide o caminho em segmentos ignorando o primeiro elemento vazio de um caminho que começa com /
  const paths = pathname.split('/').filter(x => x);

  // Função para montar a URL até o ponto do breadcrumb atual
  const makePath = (to, index) => `/${paths.slice(0, index + 1).join('/')}`;

  // Função para formatar cada parte do caminho para um título mais amigável
  const formatPart = (part) => part.charAt(0).toUpperCase() + part.slice(1);
  return (
    <HeaderContainer>
      <div className="left">
        <h1>{pontoPartida}</h1>
        <ul className="breadcrumb">
          {paths.map((path, index) => (
            <li key={index} className={`breadcrumb-item ${index === paths.length - 1 ? 'active' : ''}`}>
              {index === paths.length - 1 ? (
                formatPart(path)
              ) : (
                <Link to={makePath(path, index)}>{formatPart(path)}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </HeaderContainer>

  );
}

export default LocalPage;