const createError = require('http-errors');
const debug = require('debug')('app:module-users-controller');

const { UsersService: { create, getAll, getById } } = require('./services');
const { Response: { success, error } } = require('../common/response');

module.exports.UsersController = {
  getUsers: async(req, res) => {
    try {
      let users = await getAll()
      // res.json(products)
      success(res, 200, 'Lista de Usuarios', users)
    } catch (error) {
      debug(error)
      // res.status(500).json({message:'Internal server error'})
      error(res)
    }
  },
  getUser: async(req, res) => {
    try {
      const { params: { id } } = req
      let user = await getById(id)
      // res.json(product)
      if (!user) {
        error(res, new createError.NotFound() )
      } else {
        success(res, 200, `Usuario ${id}`, user)
      }
    } catch (error) {
      debug(error)
      // res.status(500).json({message:'Internal server error'})
      error(res)
    }
  },
  createUser: async(req, res) => {
    try {
      const { body } = req
      if (!body || Object.keys(body).length ===0) {
        error(res, new createError.BadRequest())
      } else {
        const insertedId = await create(body)
        success(res, 201, 'Usuario agregado', insertedId)
      }
      // res.json(insertedId)
    } catch (error) {
      debug(error)
      // res.status(500).json({message:'Internal server error'})
      error(res)
    }
  },

  // update

  // delete

}