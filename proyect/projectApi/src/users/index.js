const exprees = require('express');
const { UsersController: { createUser, getUser, getUsers } } = require('./controller');

const router = exprees.Router();

module.exports.UsersAPI = (app) => {
  router
    .get('/', getUsers) //http://localhost:3000/api/products
    .get('/:id', getUser) //http://localhost:3000/api/products/23
    .post('/', createUser)

    // update
    // delete

    app.use('/api/users', router)
}