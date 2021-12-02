module.exports = app => {
    app.get('/', (req, res)=> res.send('servidor rodando na rota GET, tudo beleza'))
}