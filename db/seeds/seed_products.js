const products = require('../../src/data/products.json');

exports.seed = async function (knex) {
  // Clear existing data
  await knex('products').del();

  // Insert new data
  await knex('products').insert(
    products.map((p) => ({
      id: p.id,
      name: p.name,
      certification_badge: p.certification,
      nutritional_tags: JSON.stringify(p.nutrition), // stored as JSON string
      image: p.image,
      category: p.category,
      is_enabled: true,
      created_at: new Date(),
      updated_at: new Date(),
      created_by: 1, // Adjust if different user ID
      updated_by: 1,
    }))
  );
};
