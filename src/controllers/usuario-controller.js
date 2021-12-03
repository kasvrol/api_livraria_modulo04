//solicitação do express e do cors
const express = require('express')
const cors = require('cors')
//exportação do cors e do express
module.exports = app => {
    app.use(cors());
    app.use(express.json())
    app.use((req, res, next) => {
        next();
    })
}
const modeloUsuarios = require('../models/modelo_usuarios.js')
//configuração das rotas de usuarios
const usuarios = (app) => {
    app.get('/', (req, res) => {
      res.send('<h2>API rodando na rota GET</h2>')
    })
  
    app.get('/usuarios/all', (req, res) => { 
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
  //exportação dos usuarios
  module.exports = usuarios