/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// db/migrations/YYYYMMDD_create_products_table.js
exports.up = function (knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('certification_badge');
    table.json('nutritional_tags'); // e.g., ["High Fiber", "Iron Rich"]
    table.string('image'); // image path or URL
    table.string('category');
    table.text('description_en');
    table.text('description_fr');
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
  return knex.schema.dropTable('products');
};
