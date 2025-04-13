const supplierModel  = require('../model/supplier.model');
const jwt = require("jsonwebtoken");

const SECRET_KEY = "your_jwt_scret";

class supplierService {
    static async registerSupplier(firstName, phoneNumb, companyName, email, password){
        try {
            const exisitngSupplier = await supplierModel.findOne({ email });
            if (exisitngSupplier){
                throw new Error("Email already registered.");
            }

            const creatSupplier = new supplierModel({firstName, phoneNumb, companyName, email, password });
            const savedSupplier = await creatSupplier.save();

            const token = jwt.sign({ id:savedSupplier._id}, SECRET_KEY, { expiresIn: "1d"});

            return {
                user: {
                    firstName: savedSupplier.firstName,
                    phoneNumb: savedSupplier.phoneNumb,
                    companyName: savedSupplier.companyName,
                    email: savedSupplier.email,
                    password: savedSupplier.password
                },
                token
            };
        } catch (err){
            throw err;
        }
    }

}

module.exports = supplierService;