import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GerenciarTarefas = ({ user }) => {
  const [tarefas, setTarefas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login"); // Redireciona para o login se o usuário não estiver logado
      return;
    }
    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];
    setTarefas(tarefasSalvas.filter((tarefa) => tarefa.id_usuario === user.id));
  }, [user, navigate]);

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Gerenciamento de Tarefas</h1>
      <button style={styles.botaoAdicionar} onClick={() => navigate("/CadastroTarefa")}>
        Adicionar Tarefa
      </button>
      <div style={styles.tarefasContainer}>
        {tarefas.length === 0 ? (
          <p style={styles.mensagem}>Você não tem tarefas cadastradas.</p>
        ) : (
          tarefas.map((tarefa) => (
            <div style={styles.tarefaCard} key={tarefa.id_tarefa}>
              <h3 style={styles.descricao}>{tarefa.descricao}</h3>
              <p><strong>Setor:</strong> {tarefa.setor}</p>
              <p><strong>Prioridade:</strong> {tarefa.prioridade}</p>
              <p><strong>Status:</strong> {tarefa.status}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// Estilos inline aplicados diretamente no código
const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f2f7fa",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  titulo: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  botaoAdicionar: {
    backgroundColor: "#0056b3",
    color: "#fff",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    marginBottom: "20px",
  },
  botaoAdicionarHover: {
    backgroundColor: "#003d7a",
  },
  tarefasContainer: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "20px",
  },
  tarefaCard: {
    backgroundColor: "#ffffff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
  },
  descricao: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#0056b3",
  },
  mensagem: {
    color: "#555",
    fontSize: "16px",
  },
};

export default GerenciarTarefas;
