const request = require('supertest');
const app = require('../app');
const db = require('../config/knex');

beforeAll(async () => {
  await db.migrate.latest();

  // Insert a test author if needed
  const [existingUser] = await db('users').where({ id: 1 });
  if (!existingUser) {
    await db('users').insert({
      id: 1,
      name: 'Test Author',
      email: 'author@example.com',
      password_hash: 'dummyhash'
    });
  }
});

beforeEach(async () => {
  await db('blogs').del(); // Clear blogs before each test
});

afterAll(async () => {
  await db.destroy();
});

describe('Blogs API', () => {
  it('should create a new blog post', async () => {
    const blogData = {
      title: 'Why Agroecology Matters',
      content_preview: 'Preview of agroecology blog',
      image: null,
      tags: [],
      author_id: 1,
      created_by: 1,
      updated_by: 1
    };

    const res = await request(app)
      .post('/api/blogs')
      .send(blogData);

    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty('title', blogData.title);
    expect(res.body.data).toHaveProperty('author_id', blogData.author_id);
  });

  it('should return a list of blogs', async () => {
    // Insert a sample blog directly into the DB
    await db('blogs').insert({
      title: 'Test Blog',
      content_preview: 'A preview of the blog',
      image: null,
      tags: JSON.stringify(['eco']),
      author_id: 1,
      created_by: 1,
      updated_by: 1,
      created_at: new Date(),
      updated_at: new Date()
    });

    const res = await request(app).get('/api/blogs');

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThanOrEqual(1);
  });

 it('should return a single blog by ID', async () => {
  const [inserted] = await db('blogs')
    .insert({
      title: 'Single Blog Test',
      content_preview: 'Preview text',
      image: null,
      tags: JSON.stringify(['tag1']),
      author_id: 1,
      created_by: 1,
      updated_by: 1,
      created_at: new Date(),
      updated_at: new Date()
    })
    .returning('id');

  const id = inserted.id;

  const res = await request(app).get(`/api/blogs/${id}`);

  expect(res.statusCode).toBe(200);
  expect(res.body.success).toBe(true);
  expect(res.body.data).toHaveProperty('id', id);
  expect(res.body.data).toHaveProperty('title', 'Single Blog Test');
});

});
