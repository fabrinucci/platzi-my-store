const { Model, DataTypes } = require('sequelize');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  category: {
    allowNull: false,
    type: DataTypes.STRING
  },
}

class Product extends Model {
  static associate() {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false
    }
  }
}

module.exports = {
  PRODUCT_TABLE,
  ProductSchema,
  Product,
}