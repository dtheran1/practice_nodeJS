const express = require('express');
const debug = require('debug')('app:main');

const app = express()
const { Config: { port } } = require('./src/config/index');

app.use(express.json()) // con esto le damos la capacidad de recibir datos en el req

// Modulos


app.listen(port, () => {
  debug(`Servidor escuchando en el puerto ${port}`)
})