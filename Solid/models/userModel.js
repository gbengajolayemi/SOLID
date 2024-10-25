// models/userModel.js
const db = require('../config/db');

const User = {};

//Get all users
User.getAll = (callback) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) return callback(err, null);
        return callback(null, results)
    });
};


// Get user by ID
User.getById = (user_id, callback) => {
    db.query('SELECT * FROM users WHERE user_id = ?', [user_id], (err, results) => {
        if (err) return callback(err, null);
        return callback(null, results[0]); // Assuming ID is unique
    });
};

// Create a new user
User.create = (userData, callback) => {
    db.query('INSERT INTO users SET ?', userData, (err, results) => {
        if (err) return callback(err, null);
        return callback(null, results.insertId);
    });
};

// Update a user by ID
// Update a user by ID
User.update = (user_id, userData, callback) => {
    if (Object.keys(userData).length === 0) {
        // If no data is provided to update
        return callback(new Error('No data to update'), null);
    }
    
    db.query('UPDATE users SET ? WHERE user_id = ?', [userData, user_id], (err, results) => {
        if (err) return callback(err, null);
        return callback(null, results.affectedRows);
    });
};


// Delete a user by ID
User.delete = (id, callback) => {
    db.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
        if (err) return callback(err, null);
        return callback(null, results.affectedRows);
    });
};

module.exports = User;
