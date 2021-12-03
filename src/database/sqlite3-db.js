// solicitação do sqlite3
const sqlite3 = require('sqlite3').verbose();
// solicitação do path
const path = require('path');
// solicitação do caminho da arquitetura
const caminhoArq = path.resolve(__dirname,'database.db')
// solicitação do bd
const bd = new sqlite3.Database(caminhoArq);
process.on('SIGINT', () =>
    bd.close(() => {
        process.exit(0);
    })
);
// exportação do bd
module.exports = bd;