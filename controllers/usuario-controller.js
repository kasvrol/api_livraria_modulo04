module.exports = app => {
    app.get('/', (req, res)=> res.send('servidor rodando na rota GET, tudo beleza'))
    app.post('/', (req, res)=> {
        console.log(req.body)
        res.send('servidor rodando na rota POST, tudo beleza')})
}