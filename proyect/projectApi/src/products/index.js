const exprees = require('express');
const { ProductsController: { createProduct, getProduct, getProducts, generateReports } } = require('./controller');

const router = exprees.Router();

module.exports.ProductsAPI = (app) => {
  router
    .get('/', getProducts) //http://localhost:3000/api/products
    .get('/report', generateReports)
    .get('/:id', getProduct) //http://localhost:3000/api/products/23
    .post('/', createProduct)

    app.use('/api/products', router)
}