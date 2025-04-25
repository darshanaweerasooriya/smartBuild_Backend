const express = require('express');
const router = express.Router();
const materialController = require('../controller/material.controller');
const multer = require('multer');

const storage = multer.memoryStorage(); // image stored in memory
const upload = multer({ storage: storage });


router.post('/addMaterial', upload.single('image'), materialController.addMaterial);
router.get('/material', materialController.getAllMatmerial);
router.put('/updateMaterial/:id',upload.single('image'), materialController.addMaterial);
router.delete('/deleteMaterial/:id',materialController.deleteMAterial);
router.get('/material/:id',materialController.getMaterialById)