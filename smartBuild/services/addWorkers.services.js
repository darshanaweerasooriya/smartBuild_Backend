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

module.exports ={
    addWorkers
}