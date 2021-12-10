const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname, 'database.db')
const db = new sqlite3.Database(caminhoArq);

const USUARIO = `
CREATE TABLE IF NOT EXISTS "USUARIO" (
    "id_usuario" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    "cpf" VARCHAR(11) UNIQUE NOT NULL,
    "primeiro_nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "endereco" TEXT NOT NULL
)
`;


function criaTabelaUsuario() {
    db.run(USUARIO, (error) => {
        if (error) {
            console.log('Erro ao criar a tabela usuario', error);
        }
    });
}


db.serialize(() => {
    criaTabelaUsuario();
    
})



