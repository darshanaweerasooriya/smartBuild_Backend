const express = require('express');
const router = express.Router();
const jobController = require('../controller/jobPosting.controller');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage});

router.post('/addjob', upload.single('image'), jobController.addJob);
router.get('/jobs', jobController.getAllJobs);
router.get('/job/:id', jobController.getJobID);
router.put('/update/:id',upload.single('image'),jobController.updateJob);
router.delete('delete/:id',jobController.deleteJob);

module.exports = router;