/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.string('email').unique();
    table.string('password');
    table.string('password_hash').notNullable(); // Hashed password
    table.boolean('is_enabled').defaultTo(true);
    table.timestamps(true, true);
    table.string('created_by').nullable();
    table.string('updated_by').nullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
