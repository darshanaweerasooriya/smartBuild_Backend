const desginService = require("../services/interirorDesign.servic");

const addDesign = async (req, res) => {
    try{
        const savedDesign = await desginService.addDesign(req.body, req.file);
        res.status(200).json({
            message: 'Design added successfully',
            product: savedDesign
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding product' })
    }
};

const getAllDesign = async (req, res) => {
    try {
        const desgin = await desginService.getAllDesign();
        res.status(200).json(desgin);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching Design' });
    }
}

const getDesignById = async (req, res) => {
    try {
        const design = await desginService.getProductById(req.params.id);
        if(!design) {
            return res.status(404).json({ message: 'Design not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching product' });
    }
}

const upadateDesign = async (req, res) => {
    try {
        const updatedDesign = await desginService.upadateDesign(req.params.id, req.body, req.file);
        if (!updatedDesign) {
            return res.status(404).json({ message: 'Product not found '});
        }
        res.status(200).json ({
            message: 'Desgin updated successfully',
            product: updatedDesign
        });
    } catch (error){
        console.error(error);
        res.status(500).json({ message: 'Error updating Desgin'});
    }
}

const deleteDesign = async (req,res) =>
{
    try {
            const deletedDesign = await desginService.deleteDesign(req.params.id);
            if (!deletedDesign){
                return res.status(404).json({ message:'design not found'})
            }
    
        }catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error deleting design' });
        }
}

module.exports ={
    addDesign,
    getAllDesign,
    getDesignById,
    deleteDesign,
    upadateDesign
    
}