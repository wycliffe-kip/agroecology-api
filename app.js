require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const { errorHandler } = require('./core/middleware/errorHandler');

app.use(cors());
app.use(express.json());

// Mount all routes
app.use('/api', routes);

// Error handling middleware
app.use(errorHandler);

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger'); // path to swagger.js

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
