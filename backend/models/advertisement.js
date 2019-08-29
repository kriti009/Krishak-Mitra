var mongoose = require("mongoose");

var advertisementSchema = new mongoose.Schema({
    category : {type: String, enum :["buy","sell"]},
    item_name : {type: String},
    quantity : {type : Number},
    cost : {type : Number},
    poster : {
        type: Schema.Types.ObjectId,
        refPath: 'posterType'
    },
    posterType :{
        type: String,
        required: true,
        enum: ['Farmer', 'Supplier', 'Retailer']
    }
});

module.exports = mongoose.model("Advertisement", advertisementSchema);