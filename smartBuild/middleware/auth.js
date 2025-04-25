const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
    const authHeader = req.header.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    const token = authHeader.split(' ')[1];

    try{
        const decoded = jwt.verify(token, 'secretKey');
        req.user = decoded;
        next();
    }catch (error) {
        return res.status(401).json({message: 'Invalid token' });
    }
};

module.exports = authenticateUser;