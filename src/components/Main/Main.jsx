import React from 'react';
import './MainStyled.jsx'; 
import { MainContainer } from './MainStyled.jsx';

const Main = ({ children }) => {
  return (
    <MainContainer>
      {children}
    </MainContainer>
  );
};

export default Main;
