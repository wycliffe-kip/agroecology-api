const express = require('express');
const router = express.Router();
const multer = require('multer');
const ingestController = require('./ingest.controller');

// Set up multer to handle JSON file upload
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/json') {
      cb(null, true);
    } else {
      cb(new Error('Only JSON files are allowed'), false);
    }
  },
});

// POST /api/ingest - upload JSON file
router.post('/', upload.single('file'), ingestController.ingestData);

module.exports = router;
