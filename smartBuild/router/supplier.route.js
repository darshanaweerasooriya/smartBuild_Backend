const express = require('express');
const router = express.Router();
const supplierContoller = require("../controller/suppliers.contorller");

router.post('/supplierRegister', supplierContoller.register);
router.post('/suplogin', supplierContoller.suplogin);
router.post('/getSupplier', supplierContoller.getsup);

module.exports = router;