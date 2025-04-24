const workers = require('../model/addWorkers.model');

const addWorkers = async (workData, file) => {
    const work = new workers({
        ...workData,
        image: file?
        {
            data: file.buffer,
            contentType: file.mimetype
        }
        : undefined
    })

    await work.save();

    return work;
}

const updatedWorker = async (id, data, file) => {
    const updatData = {
        ...data
    };
    if (file) {
        updatData.image ={
            data: file.buffer,
            contentType: file.mimetype
        }
    }
    return await Worker.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteWork = async (id) => {
    return await Worker.findByIdAndDelete(id);
}

const getAllWorkers = async () => {
    return await Worker.find();
};

const getWorkerById = async (id) => {
    return await Worker.findById(id);
};

module.exports ={
    addWorkers,
    updatedWorker,
    deleteWork,
    getAllWorkers,
    getWorkerById
} 