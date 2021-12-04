const usuariosDAO = require('../DAO/usuariosDAO.js')
const database = require('../database/sqlite3-db.js')

class modeloUsuarios {
  static async mostraUsuarios(req, res) {
    try {
      const mostraUsuario = await usuariosDAO.selectUsuario(database)
      res.status(200).json(mostraUsuario)
    } catch (err) {
      res.status(400).json(err)
    }
  }

  static async selecionaIDUsuarior(req, res) {
    try {
      const id = req.params.id
      const pegaID = await usuariosDAO.selectID(id, database)
      res.status(200).json(pegaID)
    } catch (err) {
      res.status(400).json(err)
    }
  }

  static async criaAutor(req, res) {
    try {
      const body = req.body
      const cria = await usuariosDAO.adicionaUsuario(body, database)
      res.status(200).json(cria)
    } catch (err) {
      res.status(400).json(err)
    }
  }

  static async atualAutor(req, res) {
    try {
      const id = req.params.id
      const body = req.body
      const upUsuario = await usuariosDAO.atualUsuario(id, body, database)
      res.status(200).json(upUsuario)
    } catch (err) {
      res.status(400).json(err)
    }
  }

  static async deletaAutor(req, res) {
    try {
      const id = req.params.id
      const delUsuario = await usuariosDAO.deleteUsuario(id, database)
      res.status(200).json(delUsuario)
    } catch (err) {
      res.status(400).json(err)
    }
  }
}

module.exports = modeloUsuarios