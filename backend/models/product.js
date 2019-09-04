var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
    type: {type: String},
    price : {type: Number}, //per kg
    amount : {type: Number}, // in kg
});

module.exports = mongoose.model("Product", productSchema);