const mongoose = require('mongoose');
const Model= mongoose.model;
const {PositionSchema} = require('../schemas/PositionSchema');


const PositionModel = new Model('Position', PositionSchema);
module.exports= {PositionModel};