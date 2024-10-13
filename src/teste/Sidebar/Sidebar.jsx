import React from "react";
import LogoERES from "../../assets/images/eres-pequeno.png";
import { Sidebar, Logo, SideMenu, MenuItem, MenuLink } from "./SidebarStyle"; // Ajuste o caminho de importação conforme necessário
import ThemeToggle from "../../components/ToggleTheme/ToggleTheme";
import { Link, useLocation } from "react-router-dom";

const MySidebar = ({ estadoCompartilhado }) => {
  const location = useLocation(); // Obtém o caminho atual

  // Função para verificar se o caminho é o atualmente ativo
  const isActive = (pathname) => location.pathname === pathname;

  return (
    <Sidebar isOpen={estadoCompartilhado}>
      <Logo href="#">
        <img src={LogoERES} alt="Logo" />
        <div className="logo-name">
          <span>Logística</span>
        </div>
      </Logo>
      <SideMenu isOpen>
        <MenuItem className={isActive('/home') ? 'active' : ''}>
          <Link to="/home">
            <MenuLink as="span">
              <i className="bx bxs-dashboard"></i>Dashboard
            </MenuLink>
          </Link>
        </MenuItem>
        <MenuItem className={isActive('/produtos') ? 'active' : ''}>
          <Link to='/produtos'>
            <MenuLink as="span">
              <i className="bx bx-store-alt"></i>Produtos
            </MenuLink>
          </Link>
        </MenuItem>
        <MenuItem className={isActive('/vendedores') ? 'active' : ''}>
          <Link to='/vendedores'>
            <MenuLink as="span">
              <i className="bx bx-group"></i>Vendedores
            </MenuLink>
          </Link>
        </MenuItem>
        <MenuItem className={isActive('/configuracoes') ? 'active' : ''}>
          <Link to='/configuracoes'>
            <MenuLink as="span">
              <i className="bx bx-cog"></i>Configurações
            </MenuLink>
          </Link>
        </MenuItem>
      </SideMenu>
      <SideMenu>
        <MenuItem>
          <ThemeToggle></ThemeToggle>
          <MenuLink>Tema</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#" className="logout">
            <i className="bx bx-log-out-circle"></i>
            Logout
          </MenuLink>
        </MenuItem>
      </SideMenu>
    </Sidebar>
  );
};


export default MySidebar;
