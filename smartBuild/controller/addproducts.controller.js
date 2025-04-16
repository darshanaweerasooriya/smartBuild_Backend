const productService = require("../services/addProduct.service");

const addProduct = async (req, res) => {
    try {
        const savedProduct = await productService.addproduct(req.body, req.file);
        res.status(201).json({
            message: 'Product added successfully',
            product: savedProduct
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding product' });
    }
};

module.exports = {
    addProduct
};
