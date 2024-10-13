import React, { useState } from 'react';
// import Sidebar from '../Sidebar/Sidebar';
// import ContainerBase from '../ContainerBase/ContainerBase';
// import TopBar from '../Topbar/Topbar';
import Sidebar from '../../teste/Sidebar/Sidebar';
import ContainerBase from "../../teste/ContainerBase/ContainerBase";
import TopBar from "../../teste/Topbar/Topbar";
import Main from '../Main/Main';

const LayoutBase = ({ children }) => {
    //Refatorar para redux
    const [abertoOuFechado, setIsSideBarOpen] = useState(true);

    const abreFecha = () => {
        setIsSideBarOpen(!abertoOuFechado);
    };

    return (
        <>
            <Sidebar estadoCompartilhado={abertoOuFechado} />
            <ContainerBase isOpen={abertoOuFechado}>
                <TopBar abreFechaSideBar={abreFecha} />
                <Main>
                    {children}
                </Main>
            </ContainerBase>
        </>
    );
};

export default LayoutBase;