import React from 'react';
import LogoERES from '../../assets/images/eres-pequeno.png'
import {StyledNav} from './TopbarStyled'
import SearchBar from '../search';

const TopBar = ({ abreFechaSideBar }) => {

  return (
    <StyledNav>
      <i class='bx bx-menu' onClick={abreFechaSideBar}></i>
      {/* <div>
        <div className="form-input">
          <input type="search" placeholder="Pesquise o vendedor..." />
          <button className="search-btn" type="submit"><i className='bx bx-search'></i></button>
        </div>
      </div> */}
      <SearchBar/>
      <a href="#" className="profile">
        <img src={LogoERES} alt="Logo" />
      </a>
      
    </StyledNav>
  );
};

export default TopBar;
