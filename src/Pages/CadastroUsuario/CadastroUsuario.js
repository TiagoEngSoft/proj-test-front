import React, { useState } from "react";
import axios from "axios";
import "./Cadastro.css"; // Inclua seu CSS aqui

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [username, setUsername] = useState("");
  const [grupoId, setGrupoId] = useState("");
  
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");

  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3333/inserirUsuario", {
        usuario: {
          nome,
          senha,
          username,
          grupo_id: grupoId,
        },
        endereco: {
          logradouro,
          numero,
          complemento,
          bairro,
          cidade,
          estado,
          cep,
        },
        contato: {
          email,
          telefone,
        },
      });
      console.log("Usuário cadastrado com sucesso:", response.data);
    } catch (error) {
      setErrorMessage("Erro ao cadastrar usuário. Tente novamente.");
      console.error("Erro ao cadastrar usuário:", error);
    }
  };

  return (
    <div className="cadastro-container">
      <h1>Cadastro de Usuário</h1>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Grupo:</label>
          <select value={grupoId} onChange={(e) => setGrupoId(e.target.value)} required>
            <option value="">Selecione um grupo</option>
            <option value="1">Usuário</option>
            <option value="2">Administrador</option>
            {/* Adicione mais opções de grupos conforme necessário */}
          </select>
        </div>

        <h2>Endereço</h2>
        <div>
          <label>Logradouro:</label>
          <input
            type="text"
            value={logradouro}
            onChange={(e) => setLogradouro(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Número:</label>
          <input
            type="text"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Complemento:</label>
          <input
            type="text"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
          />
        </div>
        <div>
          <label>Bairro:</label>
          <input
            type="text"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Cidade:</label>
          <input
            type="text"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Estado:</label>
          <input
            type="text"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            required
          />
        </div>
        <div>
          <label>CEP:</label>
          <input
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            required
          />
        </div>

        <h2>Contato</h2>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Telefone:</label>
          <input
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
