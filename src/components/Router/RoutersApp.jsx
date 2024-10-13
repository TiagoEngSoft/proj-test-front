import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Vendedores from "../../Pages/Vendedores/Vendedores";
import Produtos from "../../Pages/Produtos/Produtos";
import Configuracoes from "../../Pages/Configuracoes/Configuracoes";
import NotFound from "../../Pages/PaginaNaoEncontrada/PaginaNaoEncontrada";
import LayoutBase from "../Layout/layoutBase";
import Login from "../../Pages/Login/Login";
import ProtetorRotas from "./ProtetorRotas";
import NaoAutorizado from "../../Pages/NaoAutorizado/NaoAutorizado";
import CadastroUsuario from "../../Pages/CadastroUsuario/CadastroUsuario"

const RouterOutlet = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const isAuthenticated = currentUser != null;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
            path="/cadUsuario"
            element={
              <CadastroUsuario/>
            }
          />
        <Route element={<ProtetorRotas isAuthenticated={isAuthenticated} />}>
          <Route
            path="/home"
            element={
              <LayoutBase>
                <Home />
              </LayoutBase>
            }
          />
          <Route
            path="/vendedores"
            element={
              <LayoutBase>
                <Vendedores />
              </LayoutBase>
            }
          />
          <Route
            path="/produtos"
            element={
              <LayoutBase>
                <Produtos />
              </LayoutBase>
            }
          />
          <Route
            path="/configuracoes"
            element={
              <LayoutBase>
                <Configuracoes />
              </LayoutBase>
            }
          />
        </Route>
        <Route path="/naoAutorizado" element={<NaoAutorizado />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterOutlet;
