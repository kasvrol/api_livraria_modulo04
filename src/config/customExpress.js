// solicito o express, consign e o body-parser
const express = require('express')
const consign = require('consign')
// exporto o express
module.exports = () =>{
    const app = express()
    // solicito o pacote express para solicitar dados do body
    app.use(express.json());
    consign()
        .include('controllers')
        .into(app)
    return app;
}