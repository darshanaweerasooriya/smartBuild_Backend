const supplierService = require("../services/supplier.service");

exports.register = async (req, res, next) => {
    try{
        const {firstName, phoneNumb, companyName, email, password} = req.body;
        const supplierData = await supplierService.registerSupplier(firstName, phoneNumb, companyName, email, password);
        res.json({
            status: true,
            message: "Supplier registration successful",
            token: supplierData.token,
            user: supplierData.user
        });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};