const UserModel = require('../model/user.model');
const jwt = require("jsonwebtoken");

const SECRET_KEY = "your_jwt_secret"; // Replace with env var in production

class userService {
    static async registerUser(firstName, lastName, email, phoneNumb, password) {
        try {
            const existingUser = await UserModel.findOne({ email });
            if (existingUser) {
                throw new Error("Email already registered.");
            }

            const createUser = new UserModel({ firstName, lastName, email, phoneNumb, password });
            const savedUser = await createUser.save();

            // Create token
            const token = jwt.sign({ id: savedUser._id }, SECRET_KEY, { expiresIn: "1d" });

            return {
                user: {
                  
                    firstName: savedUser.firstName,
                    lastName: savedUser.lastName,
                    email: savedUser.email,
                    phoneNumb: savedUser.phoneNumb,
                    password: savedUser.password
                },
                token
            };
        } catch (err) {
            throw err;
        }
    }

    // static async loginUser(email, password) {
    //     try {
    //         const user = await UserModel.findOne({ email });
    //         if (!user) {
    //             throw new Error("Invalid email or password.");
    //         }

    //         const isMatch = await user.comparePassword(password);
    //         if (!isMatch) {
    //             throw new Error("Invalid email or password.");
    //         }

    //         const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1d" });

    //         return {
    //             user: {
    //                 id: user._id,
    //                 firstName: user.firstName,
    //                 lastName: user.lastName,
    //                 email: user.email,
    //                 phoneNumb: user.phoneNumb
    //             },
    //             token
    //         };
    //     } catch (err) {
    //         throw err;
    //     }
    // }


    static async checkuser(email) {
        try {
            const user = await UserModel.findOne({ email });
            return user;
        } catch (error) {
            throw error;
        }
    }


    static async generateToken(tokenData, secretKey, jwt_expire){
        return jwt.sign(tokenData,secretKey,{expiresIn:jwt_expire + 'd'});
    
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
    
            return await UserModel.findByIdAndUpdate({ email}, { password: hashPassword}, { new: true});
    
        } catch (error){
            throw error;
        }
    }
    
    
    static async getusetdata(email){
        const userdata = await UserModel.findOne({ email }).select('-password');
        return userdata;
    }catch (error) {
        throw error;
    }
    
    
}

module.exports = userService;
