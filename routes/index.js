const express = require('express');
const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const categoriesRouter = require('./categoriesRouter');
const customersRouter = require('./customersRouter');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/customers', customersRouter);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;