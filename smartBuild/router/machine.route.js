const express = require('express');
const router = express.Router();
const machineController = require('../controller/machine.controller');
const multer = require('multer');

const storage = multer.memoryStorage(); // image stored in memory
const upload = multer({ storage: storage });

router.post('/addmachne', upload.single('image'),machineController.addMachine);
router.put('/updatemachine/:id', upload.single('image'), machineController.updateMachine);
router.delete('/deletemachine/:id', machineController.deleteMachine);
router.get('/machines', machineController.getAllMachine);
router.get('/machine/:id', machineController.getMachineId);

module.exports = router;