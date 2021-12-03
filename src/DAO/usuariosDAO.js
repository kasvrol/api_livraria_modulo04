class usuariosENovosUsuarios {

    selectUsuario(usuariosdb) {
      return new Promise((resolve, reject) => {
        usuariosdb.all('SELECT * FROM USUARIO', (err, rows) => {
          if (err) {
            reject(({ "mensagem": err.message, 
                        "error": true }))
          } else {
            resolve({
              "usuarios": rows,
              "error": false
            })
          }
        })
      }
      )
    }
  
    selectID(id, usuariosdb) {
      return new Promise((resolve, reject) => {
        usuariosdb.get('SELECT * FROM USUARIO WHERE id_usuario = ?', id, (err, rows) => {
          if (err) {
            reject(({ "mensagem": err.message,
                        "error": true }))
          } else {
            resolve({
              "id_usuario": rows,
              "error": false
            })
          }
        })
      }
      )
    }
  
  
    adicionaUsuario(body, usuariosdb) {
      return new Promise((resolve, reject) => {
        usuariosdb.run(`INSERT INTO USUARIO (id_usuario, cpf, primeiro_nome, sobrenome, email, senha, cep, endereco) VALUES (?, ?, ?, ?, ?, ?, ?)`, [body.id_usuario, body.cpf, body.primeiro_nome, body.sobrenome, body.email, body.senha, body.cep, body.endereco], (err, rows) => {
          if (err) {
            reject(({ "mensagem": err.message, "error": true }))
          } else {
            resolve({
              "usuario": body,
              "error": false
            })
          }
        })
      }
      )
    }
  
  
  
    atualUsuario(id, body, usuariosdb) {
      return new Promise((resolve, reject) => {
        usuariosdb.run(`UPDATE USUARIO SET (id_usuario, cpf, primeiro_nome, sobrenome, email, senha, cep, endereco) = (?, ?, ?, ?, ?, ?, ? WHERE id_usuario = ?`, [body.id_usuario, body.cpf, body.primeiro_nome, body.sobrenome, body.email, body.senha, body.cep, body.endereco], (err, rows) => {
          if (err) {
            reject(({ "mensagem": err.message, "error": true }))
          } else {
            resolve({
              "usuario": id,
              "error": false
            })
          }
        })
      }
      )
    }
  
  
    deleteUsuario(id, usuariosdb) {
      return new Promise((resolve, reject) => {
        usuariosdb.run(`DELETE FROM USUARIO WHERE id_usuario = ?`, id, (err, rows) => {
          if (err) {
            reject(({ "mensagem": err.message, "error": true }))
          } else {
            resolve({
              "usuario": id,
              "error": false
            })
          }
        })
      }
      )
    }
  }
  
  module.exports = new usuariosENovosUsuarios