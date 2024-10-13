import React, { useState } from 'react';
import LogoERES from '../../assets/images/eres-pequeno.png'
import './Topbar.css';



const TopBar = ({ abreFechaSideBar }) => {

  return (
    <nav>
      <i class='bx bx-menu' onClick={abreFechaSideBar}></i>
      <form action="#">
        <div className="form-input">
          <input type="search" placeholder="Pesquise..." />
          <button className="search-btn" type="submit"><i className='bx bx-search'></i></button>
        </div>
      </form>
      <a href="#" className="profile">
        <img src={LogoERES} alt="Logo" />
      </a>
    </nav>
  );
};

export default TopBar;
