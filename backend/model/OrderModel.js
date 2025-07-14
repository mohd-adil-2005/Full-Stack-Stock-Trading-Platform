const mongoose = require('mongoose');
const Model= mongoose.model;
const {OrderSchema} = require('../schemas/OrderSchema');


const OrderModel = new Model('order',OrderSchema);
module.exports= {OrderModel};