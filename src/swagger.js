const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0', // Specify OpenAPI version
        info: {
            title: 'Your API Title',
            version: '1.0.0',
            description: 'API documentation for your project',
            contact: {
                name: 'Your Name',
                email: 'your.email@example.com',
            },
        },
        servers: [
            {
                url: 'http://localhost:3000', // Your server URL
            },
        ],
    },
    apis: ['./routes/*.js'], // Path to the API docs
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports = swaggerDocs;
