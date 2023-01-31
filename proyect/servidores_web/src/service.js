const data = require('./MOCK_DATA.json')

// Este archivo sera un modulo para poder usarlo en otros archivos
module.exports = {
  getUsers: () => data,
  getUser: (userId) => {
    const user = data.find((item) => item.id === Number(userId))
    return user
  },
  createUser: (dataUser) => {
    const newUser = {
      id: data.length + 1,
      ...dataUser
    }

    data.push(newUser)
    return newUser
  },
  updateUSer: (dataUser, userId) => {
    console.log(dataUser, userId)
    const indexUser = data.findIndex((item) => item.id === Number(userId))
    data[indexUser] = {
      id: Number(userId),
      ...dataUser
    }
    const user = data.find((item) => item.id === Number(userId))
    console.log({
      datauser: dataUser, Usuario: user, data
    })

    return user
  }
}
