const Blog = require('./blog.model');

// Utility: Common timestamps
const getTimestamps = () => {
  const now = new Date();
  return {
    created_at: now,
    updated_at: now,
  };
};

// Utility: 404 response
const notFound = (res, message = 'Not found') =>
  res.status(404).json({ success: false, message });

// GET all blogs (with optional pagination)
exports.getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.findAll();
    res.status(200).json({ success: true, data: blogs });
  } catch (err) {
    next(err);
  }
};

// GET blog by ID
exports.getBlogById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    if (!blog) return notFound(res, 'Blog not found');

    res.status(200).json({ success: true, data: blog });
  } catch (err) {
    next(err);
  }
};

// POST: Create a new blog
exports.createBlog = async (req, res, next) => {
  try {
    const {
      title,
      content_preview,
      image,
      tags = [],
      is_enabled = true,
      author_id = 1,
      created_by = 1,
      updated_by = 1
    } = req.body;

    const timestamps = getTimestamps();

    const blogData = {
      title,
      content_preview,
      image,
      tags: JSON.stringify(tags),
      is_enabled,
      author_id,
      created_by,
      updated_by,
      ...timestamps
    };

    const result = await Blog.create(blogData);
    res.status(201).json({ success: true, data: result[0] });
  } catch (err) {
    next(err);
  }
};

// PUT: Update a blog by ID
exports.updateBlog = async (req, res, next) => {
  try {
    const { id } = req.params;

    const {
      title,
      content_preview,
      image,
      tags = [],
      is_enabled = true,
      author_id = 1,
      updated_by = 1
    } = req.body;

    const blogData = {
      title,
      content_preview,
      image,
      tags: JSON.stringify(tags),
      is_enabled,
      author_id,
      updated_by,
      updated_at: new Date()
    };

    const result = await Blog.update(id, blogData);

    if (!result || result.length === 0) return notFound(res, 'Blog not found');

    res.status(200).json({ success: true, data: result[0] });
  } catch (err) {
    next(err);
  }
};

// DELETE blog by ID
exports.deleteBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Blog.delete(id);

    if (!deleted) return notFound(res, 'Blog not found');

    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
