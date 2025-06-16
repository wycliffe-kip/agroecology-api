const Outlet = require('./outlet.model');

// Utility: Standard 404 response
const notFound = (res, message = 'Outlet not found') =>
  res.status(404).json({ success: false, message });

// GET /outlets - Retrieve all outlets
exports.getAllOutlets = async (req, res, next) => {
  try {
    const outlets = await Outlet.findAll();
    res.status(200).json({ success: true, data: outlets });
  } catch (err) {
    next(err); // Delegate error to global error handler
  }
};

// GET /outlets/:id - Retrieve a single outlet by ID
exports.getOutletById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const outlet = await Outlet.findById(id);

    if (!outlet) return notFound(res);
    res.status(200).json({ success: true, data: outlet });
  } catch (err) {
    next(err);
  }
};

// POST /outlets - Create a new outlet
exports.createOutlet = async (req, res, next) => {
  try {
    const {
      name,
      latitude,
      longitude,
      region,
      product_categories = [],
      is_enabled = true,
      created_by = 1,
      updated_by = 1,
    } = req.body;

    const now = new Date();

    const outletData = {
      name,
      latitude,
      longitude,
      region,
      product_categories: JSON.stringify(product_categories),
      is_enabled,
      created_by,
      updated_by,
      created_at: now,
      updated_at: now,
    };

    const result = await Outlet.create(outletData);
    res.status(201).json({ success: true, data: result[0] });
  } catch (err) {
    next(err);
  }
};

// PUT /outlets/:id - Update an existing outlet
exports.updateOutlet = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name,
      latitude,
      longitude,
      region,
      product_categories = [],
      is_enabled,
      updated_by = 1,
    } = req.body;

    const outletData = {
      name,
      latitude,
      longitude,
      region,
      product_categories: JSON.stringify(product_categories),
      is_enabled,
      updated_by,
      updated_at: new Date(),
    };

    const updated = await Outlet.update(id, outletData);
    if (!updated || updated.length === 0) return notFound(res);

    res.status(200).json({ success: true, data: updated[0] });
  } catch (err) {
    next(err);
  }
};

// DELETE /outlets/:id - Remove an outlet by ID
exports.deleteOutlet = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Outlet.delete(id);

    if (!deleted) return notFound(res);
    res.status(204).send(); // No content
  } catch (err) {
    next(err);
  }
};
