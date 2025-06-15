const db = require('./config/knex');

db.raw('SELECT 1+1 AS result')
  .then(() => {
    console.log('✅ PostgreSQL is connected successfully!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('❌ Connection failed:', err);
    process.exit(1);
  });