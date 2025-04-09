const adminCredentials = require('../config/adminLogin');

exports.login = (req , res) => {
    const {email, password} = req.body;

    if(email === adminCredentials.adminEMail && password == adminCredentials. adminPassword) {
        return res.status(200).json({ message : "Admin logged in successfully", role: 'admin'});

    }

    return res,status(401).json({ message: ' Invalid email or password'});
}