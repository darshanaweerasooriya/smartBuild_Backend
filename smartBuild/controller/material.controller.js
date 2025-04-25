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
 
}

exports.model ={
    addMaterial
}