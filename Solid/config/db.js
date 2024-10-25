// config/db.js

const mysql = require('mysql2');
const { dbHost, dbUser, dbPassword, dbName, dbPort } = require('./env'); // Load env variables from env.js

// Create a connection to the database
const connection = mysql.createConnection({
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: dbName,
    port: dbPort, // Use dbPort for the MySQL connection
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database');
});

module.exports = connection;
