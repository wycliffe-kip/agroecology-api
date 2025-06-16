const db = require('../../config/knex');

// List of allowed tables for ingestion
const ALLOWED_TABLES = ['products', 'blogs', 'users', 'outlets'];

// Map tables to known JSON fields that need stringifying
const TABLE_JSON_FIELDS = {
  products: ['nutritional_tags']
};

exports.ingestData = async (req, res, next) => {
  try {
    const { table } = req.query;

    if (!table || !ALLOWED_TABLES.includes(table)) {
      return res.status(400).json({ message: 'Invalid or missing table name' });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const rawData = JSON.parse(req.file.buffer.toString());

    if (!Array.isArray(rawData)) {
      return res.status(400).json({ message: 'JSON must be an array of objects' });
    }

    // Get JSON fields that need stringifying for this table
    const jsonFields = TABLE_JSON_FIELDS[table] || [];

    // Stringify fields that PostgreSQL expects as JSON
    const transformedData = rawData.map(item => {
      const transformed = { ...item };
      for (const key of jsonFields) {
        if (transformed[key] !== undefined) {
          transformed[key] = JSON.stringify(transformed[key]);
        }
      }
      return transformed;
    });

    await db(table).insert(transformedData);

    res.status(201).json({
      message: `Data inserted into ${table}`,
      count: transformedData.length
    });

  } catch (err) {
    console.error('Ingestion error:', err);
    res.status(500).json({ message: 'Failed to ingest data', error: err.message });
  }
};
