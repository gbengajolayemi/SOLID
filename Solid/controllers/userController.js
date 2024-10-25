// controllers/userController.js
const User = require('../models/userModel');

// controllers/userController.js
//get all users
const getUsers = (req, res) => {
    User.getAll((err, result) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json({message: 'error caaling the endpoint'})
        } if (result.lenth === 0) {
            return res.status(404).json({message: 'No result'})
        } res.status(200).json({result})
    }) ;
};

// Get user by ID
const getUserById = (req, res) => {
    const userId = req.params.id;
    User.getById(userId, (err, user) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        } if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    });
};

// Create a new user
const createUser = (req, res) => {
    const newUser = req.body;
    User.create(newUser, (err, userId) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: userId, message: 'User created successfully' });
    });
};

// Update a user
const updateUser = (req, res) => {
    const user_id = req.params.id;
    const userData = req.body;
    
    if (Object.keys(userData).length === 0) {
        return res.status(400).json({ error: 'No data to update' });
    }

    User.update(user_id, userData, (err, affectedRows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully' });
    });
};


// Delete a user
const deleteUser = (req, res) => {
    const userId = req.params.id;
    User.delete(userId, (err, affectedRows) => {
        if (err) return res.status(500).json({ error: err.message });
        if (affectedRows === 0) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted successfully' });
    });
};

// Export all the controllers
module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};