const  mongoose  = require("mongoose");

//create schema
const itemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
    },
    itemStock: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

module.exports = new mongoose.model("Item", itemSchema);