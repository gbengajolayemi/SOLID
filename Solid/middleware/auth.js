// middleware/auth.js
const authMiddleware = (req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
};

module.exports = authMiddleware;
