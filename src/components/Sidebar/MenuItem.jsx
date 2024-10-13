import React, { useState } from 'react';

const MenuItem = ({ iconClass, text, active, handleMouseEnter, handleClick, rota }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
    handleMouseEnter(text);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <li
      className={`${active || isHovered ? 'active' : ''}`}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
      onClick={() => handleClick(text)}
    >
      <a href={rota}>
        <i className={iconClass}></i>{text}
      </a>
    </li>
  );
};

export default MenuItem;
