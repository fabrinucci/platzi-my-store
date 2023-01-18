const { User, UserSchema } = require('./userModel');
const { Product, ProductSchema } = require('./productModel');
const { Category, CategorySchema } = require('./categoryModel');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
}

module.exports = setupModels;