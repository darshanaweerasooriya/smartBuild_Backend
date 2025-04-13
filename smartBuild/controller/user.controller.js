const userService = require("../services/user.services");

exports.register = async (req, res, next) => {
    try {
        const { firstName, lastName, email, phoneNumb, password } = req.body;
        const userData = await userService.registerUser(firstName, lastName, email, phoneNumb, password);
        res.json({
            status: true,
            message: "User registration successful",
            token: userData.token,
            user: userData.user
        });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};

exports.login = async(req,res,next)=>{
    try{
        const {email,password} = req.body;
       

        const user = await userService.checkuser(email);
       

        if(!user){
            throw new Error('User does not exist');
        }

        const isMatch = await user.comparePassword(password);

        if(isMatch == false){
            throw new Error("Invalid Password");
        }
        let tokenData = {_id:user._id,email:user.email};

        const token = await userService.generateToken(tokenData,"secretKey",'1')

        res.status(200).json({status:true,token:token})

        
    }catch(error){
        throw error
    }


}

exports.getuser = async (req,res,next)=>{
    try{
        const {email} = req.body;

        let userdetail = await userService.getusetdata(email);

        res.json({status:true,success:userdetail});
    }catch (error){
        next(error);
    }
}