const mongoose = require('mongoose');
const Model= mongoose.model;
const {HoldingSchema} = require('../schemas/HoldingSchema');


const HoldingsModel = new Model('Holdings', HoldingSchema);
module.exports = { HoldingsModel };