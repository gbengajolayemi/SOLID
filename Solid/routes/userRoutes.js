// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes
router.get('/users', userController.getUsers);             // Get all users
router.get('/users/:id', userController.getUserById);      // Get user by ID
router.post('/users', userController.createUser);          // Create new user
router.put('/users/:id', userController.updateUser);       // Update user by ID
router.delete('/users/:id', userController.deleteUser);    // Delete user by ID

module.exports = router;
