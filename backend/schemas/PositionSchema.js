const mongoose= require('mongoose');
const Schema = mongoose.Schema;



const PositionSchema= new Schema({
     UserPosition:{
    type:Schema.Types.ObjectId,
    ref: 'UserModel',

    },
    product: {
        type:String,
      
    //    enum['CNC', 'MIS', 'NRML', 'BO', 'CO'], 
    },
    name:{
         type:String,
    },
    qty:{
         type:Number,
       
    },
    avg: {
         type: Number,
        
     
    },
    price: {
            type: Number,
           
    },
    net: {
         type:String,
         

    },
    day: {
        type:String,
    },
    isLoss: {
        type: Boolean,

    }
  });


  module.exports= { PositionSchema };