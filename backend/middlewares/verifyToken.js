const {UserModel} = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  let  token = req.cookies.token;
  

  if (!token) {
   
    return res.status(401).json({ message: "something wrong hereere " });
  
  }

  jwt.verify(token, process.env.TOKEN_KEY, (err,decoded ) => {
    if (err) {
      return res.status(403).json({ message: "Token is invalid" });
    }

     req.userId = decoded.id; // assuming token was created with payload: { id: user._id }
     
    next();
  });
};

module.exports = { verifyToken };
