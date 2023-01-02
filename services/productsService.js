const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for( let i = 0; i < limit ; i++ ) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      })
    }
  }

  find() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.products)
      }, 2000);
    });
  }

  async findOne(id) {
    const index = this.getIndex(id)
    if( index === -1 ) {
      throw boom.notFound('Product not found');
    } 
    return this.products[index]
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct;
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