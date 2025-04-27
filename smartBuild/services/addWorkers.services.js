const workers = require('../model/addWorkers.model');
const bcrypt = require('bcrypt');

const addWorkers = async (workData, file) => {
    const hashedPassword = await bcrypt.hash(workData.password, 10);
    const work = new workers({
        ...workData,
        password: hashedPassword,
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

const loginWorker = async (email, password) => {
    const worker = await workers.findOne({ email: email.toLowerCase()});
    if (!worker){
        throw new Error('Worker Not Found');
    }
    const isMatch = await bcrypt.compare(password, worker.password);
    if ( isMatch){
        throw new Error('Invalid credentails');
    }

    const JWT_SECRET = 'superSecretKEy12345';

    const token = jwt.sign(
        { id: worker._id, email: worker.email},
        JWT_SECRET,
        {expiresIn: '1d'}
    );
    return { token, worker };
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
    getWorkerById,
    loginWorker
} 