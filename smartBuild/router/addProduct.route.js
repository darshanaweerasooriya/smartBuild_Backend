const express = require('express');
const router = express.Router();
const productController = require('../controller/addproducts.controller');
const multer = require('multer');

const storage = multer.memoryStorage(); // image stored in memory
const upload = multer({ storage: storage });


router.post('/add', upload.single('image'), productController.addProduct);

module.exports = router;