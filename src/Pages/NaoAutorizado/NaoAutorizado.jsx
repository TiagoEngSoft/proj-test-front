import React from "react";

const Unauthorized = () => {
  return (
    <div style={styles.container}>
      <h2>Você não tem autorização para acessar esta página.</h2>
      <p>Atualize suas permissões para continuar essa ação</p>
      <span>Vá para: <a href="/">localhost:3000</a></span>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
  },
};

export default Unauthorized;
