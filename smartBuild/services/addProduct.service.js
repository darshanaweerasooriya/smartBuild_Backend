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
};

module.exports ={
    addproduct
};