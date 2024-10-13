import React from 'react';
import MenuItem from './MenuItem'; // Certifique-se de importar o componente MenuItem correspondente
import ThemeToggle from '../../components/ToggleTheme/ToggleTheme';

const SideMenu = ({ activeItem, handleMouseEnter, handleClick, menuItems }) => (
    <ul className="side-menu">
        {menuItems.map((menuItem, index) => (
            <MenuItem
                key={index}
                iconClass={menuItem.iconClass}
                text={menuItem.text}
                active={activeItem === menuItem.text}
                handleMouseEnter={handleMouseEnter}
                handleClick={handleClick}
                rota={menuItem.rota}
            />
        ))}
        <li>
            <a href="#">
                <ThemeToggle />Tema
            </a>
        </li>
    </ul>
);

export default SideMenu;
