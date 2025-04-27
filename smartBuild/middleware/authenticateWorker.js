const jwt = require('jsonwebtoken');

const authenticateWorker = (req, res, next) => {
    const token = req.session.token;

    if(!toekn) {
        return res.status(401).json({  message: 'Unauthorized: No token provided' })
    }
    try {
        const decoded = jwt.verify(token, 'fff');
        req.worker = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
}

module.exports = authenticateWorker;