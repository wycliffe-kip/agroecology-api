const express = require('express');
const router = express.Router();

// Mount each feature route
router.use('/products', require('../features/products/product.routes'));
// router.use('/blogs', require('../features/blogs/blog.routes'));
// router.use('/outlets', require('../features/outlets/outlet.routes'));
// router.use('/auth', require('../features/auth/auth.routes'));
// router.use('/dashboard', require('../features/dashboard/dashboard.routes'));
// router.use('/upload', require('../features/upload/upload.routes'));
// router.use('/faqs', require('../features/faqs/faq.routes'));

module.exports = router;