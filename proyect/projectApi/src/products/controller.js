const createError = require('http-errors');
const { ProductsService: { create, getAll, getById, generateReport } } = require('./services');
const { Response: { success, error } } = require('../common/response');
const debug = require('debug')('app:module-products-controller');

module.exports.ProductsController = {
  getProducts: async(req, res) => {
    try {
      let products = await getAll()
      // res.json(products)
      success(res, 200, 'Lista de productos', products)
    } catch (error) {
      debug(error)
      // res.status(500).json({message:'Internal server error'})
      error(res)
    }
  },
  getProduct: async(req, res) => {
    try {
      const { params: { id } } = req
      let product = await getById(id)
      // res.json(product)
      if (!product) {
        error(res, new createError.NotFound() )
      } else {
        success(res, 200, `Producto ${id}`, product)
      }
    } catch (error) {
      debug(error)
      // res.status(500).json({message:'Internal server error'})
      error(res)
    }
  },
  createProduct: async(req, res) => {
    try {
      const { body } = req
      if (!body || Object.keys(body).length ===0) {
        error(res, new createError.BadRequest())
      } else {
        const insertedId = await create(body)
        success(res, 201, 'Producto agregado', insertedId)
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

  generateReports: (req, res) => {
    try {
      generateReport('Inventario', res)
    } catch (error) {
      debug(error)
      error(res)
    }
  }

}