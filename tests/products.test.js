const request = require('supertest');
const app = require('../app');

describe('Products API', () => {
  it('should return a list of products', async () => {
    const res = await request(app).get('/api/products');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});