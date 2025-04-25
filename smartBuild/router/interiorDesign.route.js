const express = require('express');
const router = express.Router();
const desginContorller = require('../controller/interiorDesign.controller');
const multer = require('multer');

const storage = multer.memoryStorage(); // image stored in memory
const upload = multer({ storage: storage });

router.post('/adddesgin', upload.single('image'),desginContorller.addDesign);
router.put('/updatedesgin/:id',upload.single('image'), desginContorller.upadateDesign)
router.delete('/delete/:id',desginContorller.deleteDesign),
router.get('/design',desginContorller.getAllDesign);
router.get('/desing/:id',desginContorller.getDesignById);

module.exports = router;