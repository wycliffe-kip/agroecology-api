/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('outlets', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.decimal('latitude', 10, 6);
    table.decimal('longitude', 10, 6);
    table.string('region');
    table.string('product_categories');
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
  return knex.schema.dropTable('outlets');
};
