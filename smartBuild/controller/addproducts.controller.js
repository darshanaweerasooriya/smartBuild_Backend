const productService = require("../services/addProduct.service");

const addProduct = async (req, res) => {
    try {
        const savedProduct = await productService.addproduct(req.body, req.file);
        res.status(200).json({
            message: 'Product added successfully',
            product: savedProduct
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding product' });
    }
};

const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await productService.updateProduct(req.params.id, req.body, req.file);
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found '});
        }
        res.status(200).json ({
            message: 'Product updated successfully',
            product: updatedProduct
        });
    } catch (error){
        console.error(error);
        res.status(500).json({ message: 'Error updating product'});
    }
};

const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await productService.deleteProduct(req.params.id);
        if (!deletedProduct){
            return res.status(404).json({ message:'Product not found'})
        }

    }catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting product' });
    }
};

module.exports = {
    addProduct,
    updateProduct,
    deleteProduct
};
