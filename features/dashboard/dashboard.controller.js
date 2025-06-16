const db = require('../../config/knex');

exports.getDashboardMetrics = async (req, res, next) => {
  try {
    const result = await db.raw(`
      SELECT
        (SELECT COUNT(*) FROM users WHERE is_enabled = TRUE) AS total_users,
        (SELECT COUNT(*) FROM products WHERE is_enabled = TRUE) AS total_products,
        (SELECT COUNT(DISTINCT author_id) FROM blogs WHERE is_enabled = TRUE AND author_id IS NOT NULL) AS total_contributors
    `);

    // Debug output
    console.log('DB result:', result);

    // Return rows safely
    if (result && result.rows && result.rows.length) {
      res.json(result.rows[0]);
    } else {
      res.status(500).json({ message: 'Unexpected DB response structure' });
    }
  } catch (err) {
    console.error('Dashboard error:', err);
    next(err);
  }
};
