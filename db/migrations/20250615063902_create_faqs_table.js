/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('faqs', (table) => {
    table.increments('id').primary();
    table.string('question');
    table.text('answer_en');
    table.text('answer_fr');
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
  return knex.schema.dropTable('faqs');
};
