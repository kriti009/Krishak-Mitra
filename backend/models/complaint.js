var mongoose = require("mongoose");

var Schema  = mongoose.Schema;
var complaintSchema = new mongoose.Schema({
    category: {type:String , enum: ["payment","delivery"]},
    context : {type: String},
    complainant : {
        type: Schema.Types.ObjectId,
        refPath: 'complainer'
    },
    Respondent : {
        type: Schema.Types.ObjectId,
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
    status: {type : String, enum:["In-Queue", "Processing", "Resolved"]}
});

module.exports = mongoose.model("Complaint", complaintSchema);