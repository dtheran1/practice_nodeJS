const express = require('express')

const Service = require('./src/service')

const app = express()
const puert = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Lista de users',
    body: Service.getUsers()
  })
})

app.post('/', (req, res) => {
  const { body: newUser } = req
  res.status(201).json({
    message: 'Usuario agregado exitosamente',
    body: Service.createUser(newUser)
  })
})

app.listen(
  puert,
  () => {
    console.log(`Servidor escuchando en http://localhost:${puert}`)
  }
)
