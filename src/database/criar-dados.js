const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname, 'database.db')
const db = new sqlite3.Database(caminhoArq);

const usuario = `
    CREATE TABLE IF NOT EXISTS "USUARIO" (
        "id_usuario" INTEGER PRIMARY KEY AUTOINCREMENT,
        "cpf" varchar(11) NOT NULL UNIQUE,
        "primeiro_nome" varchar(255),
        "sobrenome" varchar(255),
        "email" varchar(255) NOT NULL UNIQUE,
        "senha" varchar(6),
        "cep" varchar(8),
        "endereco" varchar(255)
    )
`;

const usuarioInserido = `INSERT INTO USUARIO
        (id_usuario, cpf, primeiro_nome, sobrenome, email, senha, cep, endereco)
        VALUES
        (1, '11111111111', 'Janio', 'Quadros', 'janioquadros@gmail.com', 'querosair', '1111-111', 'republica do brasil, 190')
       
`;

function criaTabelaUsuario() {
    db.run(usuario, (e) => {
        if (e) {
            console.log('Erro ao criar a tabela usuario', e);
        }
    });
}

function insereTabelaUsuario() {
    db.run(usuarioInserido, (e) => {
        if (e) {
            console.log('Erro ao inserir os dados na tabela usuario', e);
        }
    });
}

db.serialize(() => {
    criaTabelaUsuario();
    insereTabelaUsuario();
})