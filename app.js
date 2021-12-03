const customExpress = require('./src/config/customExpress.js')
const app = customExpress()
const usuarios = require('./src/database/usuarios.js')
app.listen(3000, () => console.log('servidor rodando na porta 3000'))
