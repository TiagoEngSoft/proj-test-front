import React from 'react';
import Container from './ContainerBaseSty';

const ContainerBase = ({ children, isOpen}) => {
  return (
    <Container isOpen = {isOpen} >
      {children}
    </Container>
  );
};

export default ContainerBase;
