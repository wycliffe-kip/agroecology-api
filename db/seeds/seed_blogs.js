exports.seed = async function (knex) {
  await knex('blogs').del();

  await knex('blogs').insert([
    {
      id: 1,
      title: 'Benefits of Organic Farming',
      image: '/images/blog1.jpg',
      content_preview: 'Explore how organic farming improves soil health and biodiversity...',
      tags: JSON.stringify(['Organic', 'Sustainability']),
      is_enabled: true,
      author_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      created_by: 1,
      updated_by: 1,
    },
    {
      id: 2,
      title: 'Why Choose Local Markets?',
      image: '/images/blog2.jpg',
      content_preview: 'Discover the economic and environmental impact of buying local...',
      tags: JSON.stringify(['Local', 'Market', 'Eco']),
      is_enabled: true,
      author_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      created_by: 1,
      updated_by: 1,
    },
  ]);
};
