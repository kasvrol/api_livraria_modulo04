const usuariosENovosUsuarios = class usuariosDAO {
    constructor(db) {
        this.db = db;
    }

    getAllUsuarios(){
        const tab = 'SELECT * FROM USUARIOS'
        return new Promise ((resolve, reject) => {
            this.db.all (tab, (error, rows) => {
                if (error) {
                    reject ({
                        "msg": error.message,
                        "error": true
                    })
                } else {
                    resolve ({
                        "usuarios": rows,
                        "count": rows.length,
                        "error": false
                    })
                }
            }) 
        })
    }

    postUsuario(newUsuario) {
        const tab = 'INSERT INTO USUARIO (id_usuario, cpf, primeiro_nome, sobrenome, email, senha, CEP, endereco) VALUES (?,?,?,?,?,?,?,?)'
        const post = [newUsuario.id_usuario, newUsuario.cpf, newUsuario.primeiro_nome, newUsuario.sobrenome, newUsuario.email, newUsuario.senha, newUsuario.cep, newUsuario.endereco]
        
        return new Promise((resolve, reject)=> {
            this.db.run(tab, post, (error) => {
                if (error) {
                    reject ({
                        "msg": error.message,
                        "error": true
                    })
                } else {
                    resolve ({
                        "req": newUsuario,
                        "error": false
                    })
                }
            })
        })
    }

    getIdUsuario(id){
        const tab = `SELECT * FROM USUARIO WHERE ID = ?`
        return new Promise((resolve, reject)=> {
            this.db.all(tab, id, (error, rows)=> {
                if (error) {
                    reject ({
                        "msg": error.message,
                        "error": true
                    })
                } else {
                    resolve ({
                        "req": rows,
                        "error": false
                    })
                }
            })
        })
    }

    async updateUsuario(id, newUsuario) {
        try {
            const tab = `UPDATE USUARIO SET ID_USUARIO = (?), CPF = (?), PRIMEIRO_NOME = (?), SOBRENOME = (?), EMAIL = (?), SENHA = (?), CEP = (?), ENDERECO = (?), EMAIL = (?)`
            const update = [newUsuario.id_usuario, newUsuario.cpf, newUsuario.primeiro_nome, newUsuario.sobrenome, newUsuario.email, newUsuario.senha, newUsuario.cep, newUsuario.endereco]
            return new Promise((resolve, reject)=> {
                this.db.run(tab, update, (error)=> {
                    if (error) {
                        reject (error)
                    } else {
                        resolve ({
                            "msg": `O usuario com id ${id} foi atualizado`,
                            "cliente": newUsuario,
                            "error": false
                        })
                    }
                })
            })
        }
        catch (error) {
            throw new Error(error.message)
        }
    }

   async deleteUsuarios(id) {
        try {
            const usuarios = await this.getIdUsuarios(id)
            if (usuarios.req.length) {
                const tab = `DELETE FROM USUARIOS WHERE ID = ?`

                return new Promise((resolve, reject)=> {
                    this.db.run(tab, id, (error) => {
                        if (error) {
                            reject (error.message)  
                        } else {
                            resolve ({
                                "msg": `O usuario com id ${id} foi deletado`,
                                "error": false
                            })
                        }
                    })
                })
            } else {
                throw new Error (`Usuario com id ${id} não existe`)
        }
    } catch (error) {
            throw new Error(error.message)
      }
    }
} 

module.exports = usuariosENovosUsuarios