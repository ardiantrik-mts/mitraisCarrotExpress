const  mongoose  = require("mongoose");
const Role = require("./role");

//create schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    role_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Role,
        required: true,
    },
}, { timestamps : true });

module.exports = new mongoose.model("User", userSchema);