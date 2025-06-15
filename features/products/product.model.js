// features/products/product.model.js
const db = require('../../config/knex');

exports.findAll = () => db('products').select('*');

exports.findById = (id) => db('products').where({ id }).first();

exports.create = (data) => db('products').insert(data).returning('*');

exports.update = (id, data) =>
  db('products').where({ id }).update(data).returning('*');

exports.remove = (id) => db('products').where({ id }).del();
