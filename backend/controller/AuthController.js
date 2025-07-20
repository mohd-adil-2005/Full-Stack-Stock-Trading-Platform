const {UserModel}= require('../model/UserModel');
const status= require("http-status");

const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcryptjs");
// signup Page 
module.exports.Signup = async (req, res, next) => {
  try {
    const {username , email, password, } = req.body;
    if(!username||!email||!password){
      return res.json({message:"All fields are required"});
    }
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }


    const hashpassword= await bcrypt.hash(password, 12);

    const newuser = await  new UserModel({
        username: username,
        email: email,
        password: hashpassword,

    });

      await newuser.save();
    const token = createSecretToken(newuser._id);
    res.cookie("token", token, {
       withCredentials: true,
       httpOnly: true,
        secure: true,          // true ONLY in HTTPS
        sameSite: "None",
       maxAge:24*60*60*1000
  
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, newuser });
    next();
  } catch (error) {
    console.error(error);
  }
};
 
module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await UserModel.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
      
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password '  ,auth}) 
      console.log(user);

    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: true,
        secure: true,          // true ONLY in HTTPS
        sameSite: "None",
       maxAge:24*60*60*1000
     });
    return  res.status(201).json({ message: "User logged in successfully", success: true,user });
     next();
  } catch (error) {
    console.error(error);
  }
}



module.exports.getuser= async(req,res)=>{
    try{
        const userId= req.userId;
        
        const user=   await UserModel.findById(userId).select("-password");;
         if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
         return res.json({user});

    }
  catch(e){
     return res.status(500).json({message:"error fetching user"});
  }
}


module.exports.logout= async(req,res,next)=>{
    res.status(200).clearCookie("token","",{
    
       withCredentials: true,
       httpOnly: true,
        secure: true,          // true ONLY in HTTPS
        sameSite: "None",
       
    }).json({success:true, message:"user logout successfuly"});
}