const Machine = require('../model/machine.model')


const addMachine = async (machineData, file) => {
    const machine = new Machine({
        ...machineData,
        image: file?{
            data: file.buffer,
            contentType: file.mimetype
        }
        :undefined
    })

    await machine.save();

    return machine;
};

const getAllMachine = async() => {
    return await Machine.find();
}

const getMachineId = async (id) => {
    return await Machine.findById(id);
}

const updateMachine = async (MachineId, updateDate, file) => {
    const updatedFields = {
        ...updateDate,
    };

    if(file) {
        updatedFields.image ={
            data: file.buffer,
            contentType: file.mimetype
        };
    }

    return await Machine.findByIdAndUpdate(MachineId, updatedFields, {new: true});

};

const deleteMachine = async (MachineId) =>{
    return await Machine.findByIdAndDelete(MachineId);
}

module.exports ={
    addMachine,
    getAllMachine,
    getMachineId,
    deleteMachine,
    updateMachine
}