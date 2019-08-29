var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var advertisementSchema = new mongoose.Schema({
    category : {type: String, enum :["buy","sell"], required: true},
    item_name : {type: String, required : true},
    quantity : {type : Number},
    cost : {type : Number},
    poster : {
        type: Schema.Types.ObjectId,
        required : true,
        refPath: 'posterType'
    },
    posterType :{
        type: String,
        required: true,
        enum: ['Farmer', 'Supplier', 'Retailer']
    },
    status: {type: String , enum: ["sold","not-sold"]}
});

module.exports = mongoose.model("Advertisement", advertisementSchema);