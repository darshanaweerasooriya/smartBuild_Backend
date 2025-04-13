const supplierService = require("../services/supplier.service");

exports.register = async (req, res, next) => {
    try {
        const { firstName, phoneNumb, companyName, email, password } = req.body;
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

exports.suplogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const suppliers = await supplierService.checksuplier(email);

        if (!suppliers) {
            throw new Error('Supplier does not exist');
        }

        const isMatch = await suppliers.comparePassword(password);

        if (!isMatch) {
            throw new Error("Invalid Password");
        }

        let tokenData = { _id: suppliers._id, email: suppliers.email };
        const token = await supplierService.generateToken(tokenData, "secretKey", '1d');

        res.status(200).json({ status: true, token });
    } catch (error) {
        res.status(401).json({ status: false, message: error.message });
    }
};

exports.getsup = async (req, res, next) => {
    try {
        const { email } = req.body;

        let supdetails = await supplierService.getsuptdata(email);

        res.json({ status: true, success: supdetails });
    } catch (error) {
        next(error);
    }
};