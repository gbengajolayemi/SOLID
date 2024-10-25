// config/env.js

require('dotenv').config(); // Load environment variables from .env file

// Export environment variables for use throughout the project
module.exports = {
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT, // Include dbPort here
};
