const data = require('./MOCK_DATA.json')

// Este archivo sera un modulo para poder usarlo en otros archivos
module.exports = {
  getUsers: () => data,
  createUser: (dataUser) => {
    const newUser = {
      id: data.length + 1,
      ...dataUser
    }

    data.push(newUser)
    return newUser
  }
}
