import React, { useState } from "react";
import EresLogoG from "../../assets/images/eres-g.png";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/user/userSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [userName, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [toastShown, setToastShown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const carregandoUsuario = useSelector((state) => state.user.loading);

  const handleUserNameChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length >= 8) {
      setEmailError('');
      e.target.style.border = "1px solid silver";
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length >= 5) {
      setPasswordError('');
      e.target.style.border = "1px solid silver";
    }
  };

  const validateForm = () => {
    let isValid = true;
    if (userName.length < 5) {
      setEmailError('O nick de usuario deve ter pelo menos 5 caracteres.');
      isValid = false;
    }
    if (password.length < 6) {
      setPasswordError('A senha tem que ter pelo menos 6 caracteres.');
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(
        loginUser(
          userName,
          password,
          (user) => {
            navigate("/home");
          },
          (error) => {
            setToastShown(true);
          }
        )
      );
    }
  };

  const handleCreateAccount = () => {
    navigate("/cadUsuario");
  };

  return (
    <div className="principal">
      <div className="container" id="container">
        <ToastContainer />
        <div className="form-container sign-in">
          <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
            <br />
            <h1>Faça seu login</h1>
            <div className="social-icons">{/* Ícones de redes sociais */}</div>
            <span>Informe seus dados</span>

            <input
              name="userName"
              id="user_name"
              type="text"
              placeholder="Nick usuário"
              value={userName}
              onChange={handleUserNameChange}
            />
            {userNameError && <div className="error-message">{userNameError}</div>}

            <input
              name="password"
              id="campo_senha"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && (
              <div className="error-message">{passwordError}</div>
            )}

            <a href="#">Esqueceu sua senha?</a>
            <br />
            <a href="#" onClick={handleCreateAccount}>Cadastre uma conta</a>

            {carregandoUsuario ? (
              <div className="loader"></div>
            ) : (
              <button type="submit">Logar</button>
            )}
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-right">
              <div className="conteudo-pane-right">
                <br />
                <h1>Local da sua logo!</h1>
                <p>Faça login para acessar a aplicação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
