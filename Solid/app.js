// app.js

const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes'); // Import user routes
const authMiddleware = require('./middleware/auth'); // Import middleware

app.use(express.json()); // Parse incoming JSON data
app.use(authMiddleware); // Use the middleware

// Use user routes
app.use('/api', userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
