const express = require('express');
const router = express.Router();
const workerController = require('../controller/addWorkers.contorller');
const multer = require('multer');

const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

router.post('/addWorker',upload.single('image'), workerController.addWorker);

module.exports = router;