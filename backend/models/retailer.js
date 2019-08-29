var mongoose = require("mongoose");

var retailerSchema = new mongoose.Schema({
    name: {type: String},
    phone_no : {type: String},
    password :{type: String},
    jwtToken: [{type:String}],
    // role : {type: String , enum: ['farmer','retailer','supplier']}
});

module.exports = mongoose.model("Retailer", retailerSchema);