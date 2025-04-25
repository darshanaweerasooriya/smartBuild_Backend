const Material = require('../model/material.model');

const addMaterial = async (materialData, file) => {
    const material = new Material({
        ...materialData,
        image: file?{
            data: file.buffer,
            contentType: file.mimetype
        }
        : undefined
    })

    await material.save();

    return material;
};

const getAllMatmerial = async() => {
    return await Material.find();
}

const getMaterialById = async(id) => {
    return await Material.findById(id);
}

const updatedMaterial = async (productID, updateData, file) => {
    const updatedFields = {
        ...updateData,
    };

    if (file) {
            updatedFields.image ={
                data: file.buffer,
                contentType: file.mimetype
            };
        }
    
        return await Material.findByIdAndUpdate(productID, updatedFields, {new: true});
};

const deletedMAterial = async (productID) => {
    return await Material.findByIdAndDelete(productID);
}

module.exports = {
    addMaterial,
    getAllMatmerial,
    getMaterialById,
    updatedMaterial,
    deletedMAterial
}