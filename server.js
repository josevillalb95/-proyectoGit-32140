const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.send('Hola Node.js desde VERECEL!');
})

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${PORT}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
