const express = require('express');
const router = express.Router();
const supplierContoller = require("../controller/suppliers.contorller");

router.post('/supplierRegister', supplierContoller.register);


module.exports = router;