const mongoose= require("mongoose");
const Model= mongoose.model;


const {UserSchema}= require('../schemas/UserSchema')

const UserModel= new Model("user", UserSchema);
module.exports= {UserModel};