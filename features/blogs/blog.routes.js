const express = require('express');
const router = express.Router();
const blogController = require('./blog.controller');
const authMiddleware = require('../../core/middleware/auth');

// GET all blogs
router.get('/', blogController.getAllBlogs);

// GET a single blog by ID
router.get('/:id', blogController.getBlogById);

// POST: Create a new blog
router.post('/', blogController.createBlog);

// PUT: Update an existing blog by ID
router.put('/:id', blogController.updateBlog);

// DELETE a blog by ID
router.delete('/:id', blogController.deleteBlog);

const verifyToken = require('../../core/middleware/auth');

router.post('/blogs', verifyToken, blogController.createBlog);

module.exports = router;
