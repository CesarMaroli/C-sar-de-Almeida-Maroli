import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/Cadastro" style={styles.link}>
            Cadastro de Usuário
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/CadastroTarefa" style={styles.link}>
            Cadastro de Tarefa
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/AdmTarefas" style={styles.link}>
            Gerenciar Tarefas
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    background: "#6200ea",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
  },
  ul: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    gap: "15px",
  },
  li: {
    display: "inline",
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default NavBar;