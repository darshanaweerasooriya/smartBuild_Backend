const express = require('express');
const router = express.Router();
const workerController = require('../controller/addWorkers.contorller');
const multer = require('multer');
const authenticateWorker = require('../middleware/authenticateWorker')

const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

router.post('/addWorker',upload.single('image'), workerController.addWorker);
router.delete('delete/:id',workerController.deleteWork);
router.put('/update/:id', upload.single('image'), workerController.updateWorker);
router.get('/logworker',workerController.logingWorker);
router.get('/profileworker',authenticateWorker, (req, res ) => {
    res.status(200).json({
        message: 'Welcome to your profile',
        worker: req.worker
    });
});
module.exports = router; 