const knex = require('../../config/knex');
const TABLE_NAME = 'faqs';

const Faq = {
  findAll() {
    return knex(TABLE_NAME).select('*').orderBy('order', 'asc');
  },

  findById(id) {
    return knex(TABLE_NAME).where({ id }).first();
  },


  create(data) {
    return knex(TABLE_NAME).insert(data).returning('*');
  },

  update(id, data) {
    return knex(TABLE_NAME).where({ id }).update(data).returning('*');
  },

  delete(id) {
    return knex(TABLE_NAME).where({ id }).del();
  }
};

module.exports = Faq;
