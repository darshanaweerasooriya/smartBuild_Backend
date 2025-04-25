const Interior = require('../model/interiorDesign.model');

const addDesign = async (designData, file) => {
    const design = new Interior({
        ...designData,
        Image: file?{
            data: file.buffer,
            contentType: file.mimetype
        }
        : undefined
    })

    await design.save();

    return design;
}

const getAllDesign = async() => {
    return await Interior.find();
}

const getDesignById = async ( id) => {
    return await Interior.find(id);
}

const upadateDesign = async (desginID, updateData, file) => {
    const updatedFields = {
        ...updateData,
    };

    if (file) {
        updatedFields.Image ={
            data: file.buffer,
            contentType: file.mimetype
        };
    }

    return await Interior.findByIdAndUpdate(desginID, updatedFields, {new: true});
}

const deletedDesign = async (desginID) => {
    return await Interior.findByIdAndDelete(desginID);
}

module.exports ={
    addDesign,
    getAllDesign,
    getDesignById,
    upadateDesign,
    deletedDesign
}