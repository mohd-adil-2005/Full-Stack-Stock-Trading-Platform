const mongoose= require('mongoose');
const Schema = mongoose.Schema;


const HoldingSchema= new Schema({

UserHolding:{
    type:Schema.Types.ObjectId,
    ref: 'UserModel',

    },
name:
{
    type: String,
    
},
qty:{
    type: Number,


},
avg:{
    type: Number,

},
price:{
    type: Number,
        
},
net:{
    type: String,
    
},
day:{
    type:String,
}


});


module.exports ={HoldingSchema};