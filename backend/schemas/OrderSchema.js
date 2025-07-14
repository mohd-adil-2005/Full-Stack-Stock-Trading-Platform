const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  UserOrder:{
    type:Schema.Types.ObjectId,
    ref: 'UserModel',

    },
  name: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  qty: { 
    type: Number,
 },
  mode: { 
    type: String 
},
});

module.exports = { OrderSchema };
