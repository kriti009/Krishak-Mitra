var mongoose = require("mongoose");

var farmerSchema = new mongoose.Schema({
    name: {type: String},
    phone_no : {type: String},
    password :{type: String},
    jwtToken: [{type:String}],
    complaint : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Complaint'
    },
    ad: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Advertisement'
    },
    crop_grown :[{type: String}],
    role : {type: String , enum: ['farmer','retailer','supplier']}
});

module.exports = mongoose.model("Farmer", farmerSchema);