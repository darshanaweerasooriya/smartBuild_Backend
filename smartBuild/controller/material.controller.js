const { get } = require("mongoose");
const materialService = require("../services/material.service");

const addMaterial = async (req, res) => {
    try {
        const savedMaterial = await materialService.addMaterial(req.body, req.file);
        res.status(200).json({
            message: 'Material added successfully',
            product: savedMaterial
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding Material' });
    }
 
};

const getAllMatmerial = async (req, res) => {
    try{
        const material = await materialService.getAllMatmerial();
        res.status(200).json(material);
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching Materials' });
    }
}

const getMaterialById = async (req, res) => {
    try{
        const material = await materialService.getMaterialById(req.params.id);
        if(!material) {
            return res.status(404).json({ message: 'Material not found' });
        }
        res.status(200).json(material);
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching product' });
    }
}

const updateMaterial = async (req, res) => {
    try{
        const updatedMaterial = await materialService.updateMaterial(req.params.id, req.body, req.file);
        if (!updatedMaterial) {
            return res.status(404).json({ message: 'Product not found '});
        }
        res.status(200).json ({
            message: 'Material updated successfully',
            product: updateMaterial
        });
    } catch (error){
        console.error(error);
        res.status(500).json({ message: 'Error updating Material'});
    }
}

const deleteMAterial = async (req,res) => {
     try {
            const deletedMAterial = await productService.deleteProduct(req.params.id);
            if (!deletedMAterial){
                return res.status(404).json({ message:'Material not found'})
            }
    
        }catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error deleting Material' });
        }
}

module.exports={
    addMaterial,
    getAllMatmerial,
    getMaterialById,
    updateMaterial,
    deleteMAterial
}