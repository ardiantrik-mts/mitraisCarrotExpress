const  mongoose  = require("mongoose");

//create schema
const roleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    role_name: {
        type: String,
        required: true,
    }
}, { timestamps : true });

module.exports = new mongoose.model("Role", roleSchema);