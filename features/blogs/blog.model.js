const db = require('../../config/knex'); // Assuming knex is exported from config/knex.js

const TABLE_NAME = 'blogs';

const Blog = {
  findAll: () => {
    return db(TABLE_NAME).select('*');
  },

  findById: (id) => {
    return db(TABLE_NAME).where({ id }).first();
  },

  create: (data) => {
    return db(TABLE_NAME).insert(data).returning('*');
  },

  update: (id, data) => {
    return db(TABLE_NAME).where({ id }).update(data).returning('*');
  },

  delete: (id) => {
    return db(TABLE_NAME).where({ id }).del();
  }
};

module.exports = Blog;
