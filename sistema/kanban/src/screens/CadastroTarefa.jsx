import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CadastroTarefa = ({ user }) => {
  const [descricao, setDescricao] = useState('');
  const [setor, setSetor] = useState('');
  const [prioridade, setPrioridade] = useState('baixa');
  const [status, setStatus] = useState('a fazer');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const tarefa = {
      id_tarefa: new Date().getTime(), // Gerando um id único para a tarefa
      descricao,
      setor,
      prioridade,
      status,
      id_usuario: user.id, 
      dataCadastro: new Date().toLocaleString(),
    };

    const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
    
   
    tarefasSalvas.push(tarefa);

   
    localStorage.setItem('tarefas', JSON.stringify(tarefasSalvas));


    setDescricao('');
    setSetor('');
    setPrioridade('baixa');
    setStatus('a fazer');

    navigate('/gerenciar-tarefas');
    ;
  };

  return (
    <div className="container">
      <h1>Cadastro de Tarefa</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label>Descrição da Tarefa:</label>
          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Setor:</label>
          <input
            type="text"
            value={setor}
            onChange={(e) => setSetor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Prioridade:</label>
          <select
            value={prioridade}
            onChange={(e) => setPrioridade(e.target.value)}
            required
          >
            <option value="baixa">Baixa</option>
            <option value="média">Média</option>
            <option value="alta">Alta</option>
          </select>
        </div>
        <div className="form-group">
          <label>Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="a fazer">A Fazer</option>
            <option value="fazendo">Fazendo</option>
            <option value="pronto">Pronto</option>
          </select>
        </div>
        <button type="submit" onClick={handleSubmit}>Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroTarefa;
