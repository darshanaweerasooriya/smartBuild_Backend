const express = require('express');
const router = express.Router();
const authcontoller = require('../controller/adminLogin.controller');

router.post('/login',authcontoller.login);

module.exports = router;