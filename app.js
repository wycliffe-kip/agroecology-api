const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const { errorHandler } = require('./core/middlewares/errorHandler');

app.use(cors());
app.use(express.json());

// Mount all routes
app.use('/api', routes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
