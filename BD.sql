CREATE TABLE Usuario (
    id_pk SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL
);

CREATE TABLE Tarefas (
    id_tarefa_pk SERIAL PRIMARY KEY,
    descricao VARCHAR(200) NOT NULL,
    setor VARCHAR(100),
    id_usuario_fk INT NOT NULL,
    prioridade VARCHAR(20) NOT NULL CHECK (prioridade IN ('baixa', 'média', 'alta')),
    data DATE DEFAULT CURRENT_DATE,
    status VARCHAR(20) DEFAULT 'a fazer' CHECK (status IN ('a fazer', 'fazendo', 'pronto')),
    FOREIGN KEY (id_usuario_fk) REFERENCES Usuario(id_pk)
);
