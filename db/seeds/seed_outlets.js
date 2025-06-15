exports.seed = async function (knex) {
  await knex('outlets').del();

  await knex('outlets').insert([
    {
      id: 1,
      name: 'Green Basket Market',
      latitude: -1.2921,
      longitude: 36.8219,
      region: 'Nairobi',
      product_categories: JSON.stringify(['Fruits', 'Vegetables']),
      is_enabled: true,
      created_at: new Date(),
      updated_at: new Date(),
      created_by: 1,
      updated_by: 1,
    },
    {
      id: 2,
      name: 'EcoFarm Outlet',
      latitude: -0.0236,
      longitude: 37.9062,
      region: 'Meru',
      product_categories: JSON.stringify(['Grains', 'Beverages']),
      is_enabled: true,
      created_at: new Date(),
      updated_at: new Date(),
      created_by: 1,
      updated_by: 1,
    },
  ]);
};
