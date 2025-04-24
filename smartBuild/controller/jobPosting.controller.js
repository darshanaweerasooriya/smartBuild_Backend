const { param } = require("../app");
const jobService = require("../services/jobPositng.service");

const addJob = async (req, res) => {
    try {
        const savedJob = await jobService.addJob(req.body, res.file);
        res.status(200).json({
            message: 'Job added successfully',
            product: savedJob
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding Job' });
    }
};

const getAllJobs = async (req, res) => {
    try {
        const jobs = await jobService.getAllJobs();
        res.status(200).json(jobs);

    }catch (error){
        console.error(error);
        res.status(500).json({ message: 'Error fetching Jobs' });
    }
};

const getJobID = async (req, res) => {
    try {
        const job = await jobService.getJobID(req.params.id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });

        }
        res.status(200).json(job);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching Jobs' });
    }
};

const updateJob = async (req, res) => {
    try{
        const updatedJob = await jobService.updateJob(req,param.id, req.body, req.file);
        if (!updatedJob) {
            return res.status(404).json({ message: 'Job not found '});
        }
        res.status(200).json({
            message: 'job updated successfully',
            product: updatedProduct
        })
    } catch (error){
        console.error(error);
        res.status(500).json({ message: 'Error updating job'});
    }
};

const deleteJob = async (req, res) => {
    try {
        const deletedProduct = await productService.deleteProduct(req.params.id);
        if (!deletedProduct){
            return res.status(404).json({ message:'Job not found'})
        }
    } catch(error)
    {
        console.error(error);
        res.status(500).json({ message: 'Error deleting Job' });
    }
}

module.exports = {
    addJob,
    getAllJobs,
    getJobID,
    updateJob,
    deleteJob
};
