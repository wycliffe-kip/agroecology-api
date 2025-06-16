const db = require('../../config/knex'); // Adjust path as necessary

const Outlet = {
  findAll: () => {
    return db('outlets').select('*');
  },

  findById: (id) => {
    return db('outlets').where({ id }).first();
  },

  create: (data) => {
    return db('outlets').insert(data).returning('*');
  },

  update: (id, data) => {
    return db('outlets').where({ id }).update(data).returning('*');
  },

  delete: (id) => {
    return db('outlets').where({ id }).del();
  }
};

module.exports = Outlet;
