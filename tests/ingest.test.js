const request = require('supertest');
const path = require('path');
const fs = require('fs');
const app = require('../app'); // adjust if app.js is in a different location

const db = require('../config/knex');

beforeAll(async () => {
  await db.migrate.latest(); // apply latest migrations
});

afterAll(async () => {
  await db.destroy(); // close DB connection
});
describe('POST /api/ingest', () => {
  it('should return 400 if no file is uploaded', async () => {
    const res = await request(app)
      .post('/api/ingest?table=products');

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe('No file uploaded');
  });

  it('should return 400 for invalid table name', async () => {
    const filePath = path.join(__dirname, 'valid-products.json');
    expect(fs.existsSync(filePath)).toBe(true); // ensure the test file exists

    const res = await request(app)
      .post('/api/ingest?table=invalid_table')
      .attach('file', filePath);

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe('Invalid or missing table name');
  });

  it('should insert data successfully and return 201', async () => {
    const filePath = path.join(__dirname, 'valid-products.json');
    expect(fs.existsSync(filePath)).toBe(true);

    const res = await request(app)
      .post('/api/ingest?table=products')
      .attach('file', filePath);

    expect(res.statusCode).toBe(201);
    expect(res.body.message).toMatch(/Data inserted into products/);
    expect(res.body.count).toBeGreaterThanOrEqual(1);
  });
});
