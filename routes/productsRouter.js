const express = require('express');
const router = express.Router();
const ProductsService = require('../services/productsService');
const validatorHandler = require('../middlewares/validatorHandler');
const {
  createProductSchema, 
  getProductSchema,
  updateProductSchema
} = require('../schemas/productsSchema');

const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
})

router.get('/:id', 
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error)
    }
  }
)

router.post('/', 
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => { 
    const body = req.body;
    const product = await service.create(body);

    res.status(201).json(product)
  }
)

router.patch('/:id', 
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => { 
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product)
    } catch (error) {
      next(error)
    }
  }
)

router.delete('/:id', 
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => { 
    try {
      const { id } = req.params;
      const rta = await service.delete(id);
      res.json(rta);
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router;