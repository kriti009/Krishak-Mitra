var mongoose = require("mongoose");

var farmerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    phone_no : {type: String},
    password :{type: String, required :true},
    jwtToken: [{type:String}],
    complaint : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Complaint'
    }],
    ad: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Advertisement'
    }],
    crop_grown :[{type: String, required :true}],
    role : {type: String , enum: ['farmer','retailer','supplier'] , required :true}
});

module.exports = mongoose.model("Farmer", farmerSchema);