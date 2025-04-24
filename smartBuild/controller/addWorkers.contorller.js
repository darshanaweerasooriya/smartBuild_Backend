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
};

const updateWorker = async (req, res) => {
    try{
        const updatedWorker = await workerService.updateWorker(req.params.id, req.body, req.file);
        if (!updateWorker) {
            return res.status (404).json({ message: 'Product not found ' });
        }
        res.status(200).json ({
            message: 'Worker updated successfully',
            product: updatedWorker
        });
    }catch (error){
        console.error(error);
        res.status(500).json({ message: 'Error updating workers'});
    }
}

const deleteWork = async (req, res) => {
    try {
        const deletedWork = await workerService.deleteWork(req.params.id);
        if (!deletedWork){
            return res.status(404).json({catch (error){
                console.error(error);
                res.status(500).json({ message: 'Error Delete worker'});
            }})
                }
        
            }catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Error deleting worker' });
            }
}

module.exports = {
    addWorker,
    updateWorker,
    deleteWork
}