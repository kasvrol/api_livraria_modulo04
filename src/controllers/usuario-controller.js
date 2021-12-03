module.exports = app => {
    app.get('/', (req, res)=> res.send('servidor rodando na rota GET, tudo beleza'))
    app.post('/', (req, res)=> {
        console.log(req.body)
        res.send('servidor rodando na rota POST, tudo beleza')})
}
const modeloUsuarios = require('../models/modelo_usuarios')

const usuarios = (app) => {
    app.get('/', (req, res) => {
      res.send('<h2>API rodando na rota GET</h2>')
    })
  
    app.get('/usuarios', (req, res) => { 
        modeloUsuarios.mostraUsuarios(req, res)
    })
  
    app.get('/usuarios/:id', (req, res) => { 
        modeloUsuarios.selecionaIDUsuario(req, res)
    })
  
    app.post('/usuarios', (req, res) => {
        modeloUsuarios.criaUsuario(req, res)
    })
  
    app.patch('/usuarios/:id', (req, res) => {
        modeloUsuarios.atualUsuario(req, res)
    })
  
    app.delete('/usuarios/:id', (req, res) => {
        modeloUsuarios.deletaUsuario(req, res)
    })
  }
  
  module.exports = usuarios