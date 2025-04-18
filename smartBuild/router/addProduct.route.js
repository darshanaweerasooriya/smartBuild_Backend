const express = require('express');
const router = express.Router();
const productController = require('../controller/addproducts.controller');
const multer = require('multer');

const storage = multer.memoryStorage(); // image stored in memory
const upload = multer({ storage: storage });


router.post('/add', upload.single('image'), productController.addProduct);
router.put('/update/:id', upload.single('image'), productController.updateProduct);
router.delete('/delete/:id', productController.deleteProduct);
router.get('/products', productController.getAllProducts);
router.get('/product/:id', productController.getProductById);

module.exports = router;