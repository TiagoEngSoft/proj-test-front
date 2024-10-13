import React from 'react';
import './ContainerBase.css'; 

const ContainerBase = ({ children }) => {
  return (
    <div className="content">
      {children}
    </div>
  );
};

export default ContainerBase;
