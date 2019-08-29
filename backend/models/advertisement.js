var mongoose = require("mongoose");

var advertisementSchema = new mongoose.Schema({
    category : {type: String, enum :["buy","sell"]},
    item_name : {type: String},
    quantity : {type : Number},
    cost : {type : Number},
    
});

module.exports = mongoose.model("Advertisement", advertisementSchema);