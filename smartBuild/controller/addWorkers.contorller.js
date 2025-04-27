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

const logingWorker = async (req, res)=> {
    try {
        const {email, password} = req.body;
        const { toekn } = await authService.logingWorker(email, password);
        
        req.session.toekn = toekn;
        res.status(200).json({ toekn, message: 'login successfull'});
    }catch (error) {
        res.status(401).json({ message: error.message });
    }

}

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
};

const getAllWorkers = async (req, res) => {
    try {
        const workers = await workerService.getAllWorkers();
        res.status(200).json(workers);
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching workers' })
    }
};

const getWorkerById = async (res, req) => {
    try {
        const worker = await workerService.getWorkerById(req.params.id);
        if (!worker) {
            return res.status(404).json({ message: 'Worker not found' });

        }
        res.status(200).json(worker);
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching worker' });
    }
};
 
module.exports = {
    addWorker,
    updateWorker,
    deleteWork,
    getAllWorkers,
    getWorkerById,
    logingWorker
}