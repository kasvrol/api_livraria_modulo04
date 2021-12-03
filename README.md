# API LIVRARIA

## Desenvolvimento de API em Node.JS com bibliotecas da framework express. 

### Sobre a API:

A API foi construídas com fins didáticos, como projeto final do quarto módulo da Resilia Educação. Utilizando os conceitos de organização MVC - model, view e controller -, e o banco de dados SQL. 

## Ferramentas utilizadas:

<!--ts-->
   * SQLite
   * Node.Js
   * Express
   * Cors
   * Consign
   
   
## Rotas da API:

| Método | Rota | Funcionalidade |
| ------ | ----- | ----------- |
| **GET** | `/usuarios/all` | Gets em todos|
| **GET** | `/usuarios/{id}` | Gets em usuário por {id} |
| **POST** | `/usuarios` | Entrada de novo usuário |
| **PATCH** | `/usuarios/{id}` | Alterações por {id} |
| **DELETE** | `/usuarios/{id}` | Deleção de usuário {id} |

## Dependências Gerais:
```js
 "dependencies": {
    "body-parser": "^1.19.0",
    "consign": "^0.1.6",
    "express": "^4.17.1",
    "sqlite3": "^5.0.2"
  }
```

## Dependências Dev:

```js
"devDependencies": {
    "nodemon": "^2.0.15"
  }
  ```
  # Iniciando o projeto no seu PC

   ## Abra o terminal de seu computador
   ## Clone o repositório:
  ```bash
git clone https://github.com/kasvrol/api_livraria_modulo04
```
  ## Abra a pasta em seu editor de código.
  ## Abra o terminal integrado da pasta no editor do código.
  ## Instale o pacote do código:

  
  ```bash
npm install
```
 ## Instalação Necessária:
  
  ```bash
npm start
```

## Group 10:

- [Ayala Priscila](https://github.com/priscilacerqueira21)
- [Ana Karolina](https://github.com/kasvrol) 
- [Gabriela Costa](https://github.com/gabrielaalvescosta) 
- [William Rodrigues](https://github.com/willy-r)

## Autora:

- [Ana Karolina](https://github.com/kasvrol)