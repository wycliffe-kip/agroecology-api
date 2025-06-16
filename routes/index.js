const express = require('express');
const router = express.Router();

// Mount each feature route
router.use('/products', require('../features/products/product.routes'));
router.use('/blogs', require('../features/blogs/blog.routes'));
router.use('/faqs', require('../features/faqs/faq.routes'));
router.use('/outlets', require('../features/outlets/outlet.routes'));
router.use('/dashboard', require('../features/dashboard/dashboard.routes'));
router.use('/ingest', require('../features/ingest/ingest.routes'));
router.use('/auth', require('../features/auth/auth.routes'));

module.exports = router;
