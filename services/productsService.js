const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ProductsService {
  constructor() {}

  async create(data) {
    return data
  }

  async find() {
    const rta = await models.Product.findAll();
    return rta;
  }

  async findOne(id) {
    const index = this.getIndex(id)
    if( index === -1 ) {
      throw boom.notFound('Product not found');
    } 
    return this.products[index]
  }

  async update(id, changes) {
    const index = this.getIndex(id);
    if( index === -1 ) {
      throw boom.notFound('Product not found');
    }

    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    }
    return this.products[index]
  }

  async delete(id) {
    const index = this.getIndex(id);
    if(index === -1) {
      throw boom.notFound('Product not found');
    } else {
      this.products.splice(index, 1)
      return { id };
    }
  }

  getIndex(id) {
    return this.products.findIndex(product => product.id === id);
  }
}

module.exports = ProductsService;