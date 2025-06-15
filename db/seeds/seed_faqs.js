exports.seed = async function (knex) {
  await knex('faqs').del();

  await knex('faqs').insert([
    {
      id: 1,
      question: 'What is agroecology?',
      answer_en: 'Agroecology is a holistic approach to sustainable agriculture.',
      answer_fr: 'L’agroécologie est une approche holistique de l’agriculture durable.',
      is_enabled: true,
      created_at: new Date(),
      updated_at: new Date(),
      created_by: 1,
      updated_by: 1,
    },
    {
      id: 2,
      question: 'How can I identify certified organic products?',
      answer_en: 'Look for recognized certification badges on the packaging.',
      answer_fr: 'Recherchez les labels de certification reconnus sur l’emballage.',
      is_enabled: true,
      created_at: new Date(),
      updated_at: new Date(),
      created_by: 1,
      updated_by: 1,
    },
  ]);
};
