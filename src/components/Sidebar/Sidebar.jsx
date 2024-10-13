/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import "./Sidebar.css";
import LogoERES from "../../assets/images/eres-pequeno.png";
import SideMenu from './SideMenu';

const Sidebar = ({ estadoCompartilhado }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const handleMouseEnter = (itemName) => {
    setActiveItem(itemName);
  };

  const handleClick = (itemName) => {
    setActiveItem(itemName);
  };

  const handleClickPrevent = (event) => {
    event.preventDefault();
  };

  const itensMenuObj = [
    {
      "iconClass": "bx bxs-dashboard white-icon",
      "text": "Dashboard",
      "rota": "/"
    },
    {
      "iconClass": "bx bx-group white-icon",
      "text": "Users",
      "rota": "/vendedores"
    },
    {
      "iconClass": "bx bx-cog white-icon",
      "text": "Settings",
      "rota": "/configuracoes"
    }
  ]


  return (
    <div className={`sidebar ${estadoCompartilhado ? "close" : ""}`}>
      <a href="#" className="logo" onClick={handleClickPrevent}>
        <img src={LogoERES} alt="Logo" />
        <div className="logo-name">
          <span>Logística</span>
        </div>
      </a>
      <SideMenu
        activeItem={activeItem}
        handleMouseEnter={handleMouseEnter}
        handleClick={handleClick}
        menuItems={itensMenuObj}
      />
      <ul className="side-menu">
        <li>
          <a href="#" className="logout" onClick={handleClickPrevent}>
            <i className="bx bx-log-out-circle"></i>
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
