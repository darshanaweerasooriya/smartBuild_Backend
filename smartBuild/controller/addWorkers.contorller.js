const workerService = require("../services/addWorkers.services");

const addWorker = async (req, res) => {
    try{
        const savedWorkers = await workerService.addWorkers(req.body, req.file);
        res.status(200).json({
            message: 'Worker added successfully',
            product: savedWorkers
        });
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding workers' });
    }
}

module.exports = {
    addWorker,
}