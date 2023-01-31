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

app.get('/:userId', (req, res) => {
  const { params: { userId } } = req
  const user = Service.getUser(userId)
  res.json({
    message: `Usuario ${userId}`,
    body: user
  })
})

app.post('/', (req, res) => {
  const { body: newUser } = req
  res.status(201).json({
    message: 'Usuario agregado exitosamente',
    body: Service.createUser(newUser)
  })
})

app.put('/:userId', (req, res) => {
  const { body: updateUser, params: { userId } } = req
  const dataUser = Service.updateUSer(updateUser, userId)

  // console.log(dataUser, 'Datauser')

  res.status(200).json({
    message: 'Usuario Modificado exitosamente',
    body: dataUser
  })
})

app.listen(
  puert,
  () => {
    console.log(`Servidor escuchando en http://localhost:${puert}`)
  }
)
