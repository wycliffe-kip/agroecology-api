exports.seed = async function (knex) {
  await knex('users').del();
  await knex('users').insert([
    {
      id: 1, // 👈 make sure this matches the author_id in blogs
      name: 'admin',
      email: 'admin@example.com',
      password_hash: '$2y$10$i5PskYuwViV11llHVrHA5OKNKl0Ak8JGljV47bKWgnAwZ13DiRewu',
      is_enabled: true,
      created_by: null,
      updated_by: null,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
};
