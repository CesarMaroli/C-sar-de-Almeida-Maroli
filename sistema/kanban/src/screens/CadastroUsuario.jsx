import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CadastroUsuario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleCadastro = () => {
    const userData = { nome, email };
    localStorage.setItem("user", JSON.stringify(userData));
    alert("Cadastro realizado com sucesso!");
    navigate("/login");
  };

  return (
    <div>
      <h1>Cadastro de Usuário</h1>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleCadastro}>Cadastrar</button>
    </div>
  );
};

export default CadastroUsuario;
