import { Navigate, Outlet } from 'react-router-dom';

const ProtetorRotas = ({ isAuthenticated }) => {
  // Se o usuário não está autenticado, redirecione para a página de login.
  if (!isAuthenticated) {
    return <Navigate to="/naoAutorizado" />;
  }

  // Se o usuário está autenticado, permita o acesso à rota.
  return <Outlet />;
};

export default ProtetorRotas;