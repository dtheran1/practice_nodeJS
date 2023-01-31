const express = require('express')

const data = require('./MOCK_DATA.json')

const app = express()
const puert = 3000

app.get('/', (req, res) => {
  res.json({
    message: 'Lista de users',
    body: data
  })
})

app.listen(
  puert,
  () => {
    console.log(`Servidor escuchando en http://localhost:${puert}`)
  }
)
