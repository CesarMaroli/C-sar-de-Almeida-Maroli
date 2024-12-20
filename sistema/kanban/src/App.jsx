import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Importando o Link
import CadastroUsuario from './screens/CadastroUsuario';
import Login from './screens/Login';
import GerenciarTarefas from './screens/GerenciarTarefas';  
import CadastroTarefa from './screens/CadastroTarefa';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <header>
        <div className="header-left">
          <h1>Kanban</h1>
        </div>
        <nav className="header-right">
          <Link to="/login">Login</Link>
          <Link to="/cadastro">Cadastro</Link>
          <Link to="/gerenciar-tarefas">Gerenciar Tarefas</Link> {/* Atualizado aqui */}
        </nav>
      </header>

      <div className="main-content">
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/gerenciar-tarefas" element={<GerenciarTarefas user={user} />} /> {/* Atualizado aqui */}
          <Route path="/CadastroTarefa" element={<CadastroTarefa user={user} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
