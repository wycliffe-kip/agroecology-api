const Product = require('./product.model');

// Utility: Send 404 response
const notFound = (res, message = 'Not found') =>
  res.status(404).json({ message });

// GET /products or /products/:id
exports.fetchProducts = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (id) {
      // Fetch product by ID
      const product = await Product.findById(id);
      if (!product) return notFound(res, 'Product not found');
      return res.status(200).json(product);
    }

    // Fetch all products
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    next(error); // Pass error to global error handler
  }
};

// POST /products (Create or Update)
exports.saveProduct = async (req, res, next) => {
  try {
    const productData = req.body;

    if (productData.id) {
      // Update existing product
      const updated = await Product.update(productData.id, productData);
      return res.status(200).json({
        message: 'Product updated successfully',
        data: updated
      });
    }

    // Create new product
    const created = await Product.create(productData);
    res.status(201).json({
      message: 'Product created successfully',
      data: created
    });
  } catch (error) {
    next(error);
  }
};

// DELETE /products/:id
exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleted = await Product.remove(id);
    if (!deleted) return notFound(res, 'Product not found');

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    next(error);
  }
};
