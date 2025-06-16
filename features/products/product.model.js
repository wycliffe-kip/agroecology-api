const db = require('../../config/knex'); // Adjust path as needed

const TABLE_NAME = 'products';

const Product = {
  // Fetch all products
  findAll: () => {
    return db(TABLE_NAME).select('*');
  },

  // Fetch product by ID
  findById: (id) => {
    return db(TABLE_NAME).where({ id }).first();
  },

  // Create new product
  create: (product) => {
    return db(TABLE_NAME).insert(product).returning('*');
  },

  // Update product by ID
  update: (id, product) => {
    return db(TABLE_NAME).where({ id }).update(product).returning('*');
  },

  // Delete product by ID
  remove: (id) => {
    return db(TABLE_NAME).where({ id }).del();
  },
};

module.exports = Product;
