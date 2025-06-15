const express = require('express');
const router = express.Router();
const productController = require('./product.controller');

// GET all or by ID
// Define specific route first
router.get('/:id', productController.fetchProducts);
router.get('/', productController.fetchProducts);


// POST: create or update
router.post('/', productController.saveProduct);

// DELETE
router.delete('/:id', productController.deleteProduct);

module.exports = router;

