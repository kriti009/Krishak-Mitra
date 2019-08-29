var mongoose = require("mongoose");

var complaintSchema = new mongoose.Schema({
    category: {type:String , enum: ["payment","delivery"]},
    context : {type: String},
    complainant : {type : String},
    Respondent : {type: String},
    status: {type : String, enum:["In-Queue", "Processing", "Resolved"]}
});

module.exports = mongoose.model("Complaint", complaintSchema);