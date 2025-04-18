const Product = require('../model/addproduct.model');

const addproduct = async (prodductData, file) => {
    const product =  new Product({
        ...prodductData,
        image: file
        ?{
            data: file.buffer,
            contentType: file.mimetype
        }
        : undefined

    })

    await product.save();

    return product;
};

//get products

const getAllProducts = async() => {
    return await Product.find();
};

//get product by ID 

const getProductById = async (id) =>{
    return await Product.findById(id);
}

//update 

const updateProduct = async (productID, updateData, file) => {
    const updatedFields = {
        ...updateData,
    };

    if (file) {
        updatedFields.image ={
            data: file.buffer,
            contentType: file.mimetype
        };
    }

    return await priduct.findByIdAndUpdate(productID, updatedFields, {new: true});
};

// delete

const deleteProduct = async (productID) => {
    return await product.findByIdAndDelete(productID);
};


module.exports ={
    addproduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
    getProductById
};