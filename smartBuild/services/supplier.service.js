const supplierModel  = require('../model/supplier.model');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const SECRET_KEY = "your_jwt_scret";

class supplierService {
    static async registerSupplier(firstName, phoneNumb, companyName, email, password){
        try {
            const existingSupplier = await supplierModel.findOne({ email });
            if (existingSupplier){
                throw new Error("Email already registered.");
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const createSupplier = new supplierModel({
                firstName,
                phoneNumb,
                companyName,
                email,
                password: hashedPassword
            });

            const savedSupplier = await createSupplier.save();

            const token = jwt.sign({ id: savedSupplier._id }, SECRET_KEY, { expiresIn: "1d" });

            return {
                user: {
                    firstName: savedSupplier.firstName,
                    phoneNumb: savedSupplier.phoneNumb,
                    companyName: savedSupplier.companyName,
                    email: savedSupplier.email,
                },
                token
            };
        } catch (err){
            throw err;
        }
    }

    static async checksuplier(email){
        try{
            const supplier = await supplierModel.findOne({ email });
            return supplier;
        } catch (error){
            throw error;
        }
    }

    static async generateToken(tokenData, secretKey, jwt_expire){
        return jwt.sign(tokenData, secretKey, { expiresIn: jwt_expire });
    }

    static async verifyToken(token, secretKey){
        try {
            return jwt.verify(token, secretKey);
        } catch (error){
            throw error;
        }
    }

    static async updatePassword(email, newPassword) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(newPassword, salt);

            return await supplierModel.findOneAndUpdate({ email }, { password: hashPassword }, { new: true });
        } catch (error){
            throw error;
        }
    }

    static async getsuptdata(email){
        const supdata = await supplierModel.find({ email });
        return supdata;
    }
}

module.exports = supplierService;