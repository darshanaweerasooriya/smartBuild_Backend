const machineService = require('../services/machine.service')

const addMachine = async (req, res) => {
    try {
        const savedMachine = await machineService.addMachine(req.body, req.file);
        res.status(200).json({
            message: 'Machine added successfully',
            product: savedMachine
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding Machine' });
    }
}

const getAllMachine = async (req, res) => {
    try {
        const machines = await machineService.getAllMachine();
        res.status(200).json(machines);
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching Machine' });
    }
}

const getMachineId = async (req, res) => {
    try{
        const machine = await machineService.getMachineId(req.params.id);
        if (!machine) {
            return res.status(404).json({ message: 'Machine not found' });
        }
        res.status(200).json(machine);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching Machine' });
    }
}

const updateMachine = async (req, res) => {
    try {
        const updatedMachine = await machineService.updateMachine(req.params.id, req.body, req.file);
        if (!updatedMachine) {
            return res.status(404).json({ message: 'Machine not found '});
        }
        res.status(200).json ({
            message: 'Machine updated successfully',
            product: updatedMachine
        });
    } catch (error){
        console.error(error);
        res.status(500).json({ message: 'Error updating Machine'});
    }
}

const deleteMachine = async (req, res) => {
    try {
        const deletedMachine = await machineService.deleteMachine(req.params.id);
        if (!deletedMachine){
            return res.status(404).json({ message:'Machine not found'})
        }
        }catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error deleting Machine' });
        }
}


module.exports ={
    addMachine,
    getAllMachine,
    getMachineId,
    deleteMachine,
    updateMachine
}