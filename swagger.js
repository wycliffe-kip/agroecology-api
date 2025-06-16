const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Agroecology API',
      version: '1.0.0',
      description: 'API documentation for Agroecology Infohub',
    },
    servers: [
      {
        url: 'http://localhost:3000/api', // Update if needed
      },
    ],
  },
  apis: ['./routes/*.js', './features/**/*.js'], // Path to your route files
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
