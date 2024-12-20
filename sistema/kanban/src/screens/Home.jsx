import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus) {
      setIsLoggedIn(true);
      navigate("/AdmTarefas"); // Redireciona automaticamente se já estiver logado
    }
  }, [navigate]);

  return !isLoggedIn ? (
    <div style={styles.container}>
      <h1>Bem-vindo ao Gerenciamento de Tarefas</h1>
      <div style={styles.buttonContainer}>
        <button onClick={() => navigate("/Cadastro")} style={styles.button}>
          Cadastrar
        </button>
        <button onClick={() => navigate("/Login")} style={styles.button}>
          Login
        </button>
      </div>
    </div>
  ) : null;
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    marginTop: "100px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#6200ea",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Home;
