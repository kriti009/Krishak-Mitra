var mongoose = require("mongoose");

var Schema  = mongoose.Schema;
var complaintSchema = new mongoose.Schema({
    category: {type:String , enum: ["payment","delivery"]},
    context : {type: String},
    complainant : {
        type: Schema.Types.ObjectId,
        required: true,
        refPath: 'complainer'
    },
    respondent : {
        type: Schema.Types.ObjectId,
        required: true,
        refPath: 'responder'
    },
    complainer : {
        type: String,
        required: true,
        enum: ['Farmer', 'Supplier', 'Retailer']
    },
    responder : {
        type: String,
        required: true,
        enum: ['Farmer', 'Supplier', 'Retailer']
    },
    status: {type : String, enum:["In-Queue", "Processing", "Resolved"]},
    emp : {type: String},
});

module.exports = mongoose.model("Complaint", complaintSchema);