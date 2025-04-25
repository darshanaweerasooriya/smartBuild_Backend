const express = require('express');
const router = express.Router();
const UserController = require("../controller/user.controller");
const authenticateUser = require('../middleware/auth')

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/getuser', authenticateUser, UserController.getuser)

module.exports = router;
