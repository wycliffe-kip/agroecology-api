const express = require('express');
const router = express.Router();
const outletController = require('./outlet.controller');

// GET all outlets
router.get('/', outletController.getAllOutlets);

// GET outlet by ID
router.get('/:id', outletController.getOutletById);

// POST new outlet
router.post('/', outletController.createOutlet);

// PUT update outlet
router.put('/:id', outletController.updateOutlet);

// DELETE outlet
router.delete('/:id', outletController.deleteOutlet);

module.exports = router;
