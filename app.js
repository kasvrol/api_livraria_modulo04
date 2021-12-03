// solicitando o arquivo customExpress.js
const customExpress = require('./src/config/customExpress.js')
// configurando app e porta
const app = customExpress()
const PORT = process.env.PORT || 3000
// solicitando o arquivo usuarios-controller.js
const usuarioController = require('./src/controllers/usuario-controller.js')
usuarioController(app)

const usuarios = require('./src/database/usuarios.js')
app.listen(PORT, () => console.log('servidor rodando na porta 3000'))
///////////////////////////////////////////////////

