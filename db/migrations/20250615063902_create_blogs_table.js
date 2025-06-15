/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// db/migrations/YYYYMMDD_create_blogs_table.js
exports.up = function (knex) {
  return knex.schema.createTable('blogs', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('image');
    table.text('content_preview');
    table.text('content');
    table.string('tags'); // comma-separated string or store as JSON
    table.integer('author_id').unsigned().references('id').inTable('users');
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
  return knex.schema.dropTable('blogs');
};
