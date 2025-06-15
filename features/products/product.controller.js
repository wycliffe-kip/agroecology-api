const Product = require('./product.model');

// GET /products or /products/:id
const Product = require('./product.model'); 

exports.fetchProducts = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (id) {
      const product = await Product.findById(id);
      if (!product) return res.status(404).json({ message: 'Product not found' });
      return res.json(product);
    }

    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
};


// POST /products
exports.saveProduct = async (req, res, next) => {
  try {
    const productData = req.body;

    // If ID is present, update
    if (productData.id) {
      const updated = await Product.update(productData.id, productData);
      return res.json({ message: 'Product updated successfully', data: updated });
    }

    // Otherwise, create new
    const created = await Product.create(productData);
    res.status(201).json({ message: 'Product created successfully', data: created });
  } catch (error) {
    next(error);
  }
};

// DELETE /products/:id
exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleted = await Product.remove(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    next(error);
  }
};
