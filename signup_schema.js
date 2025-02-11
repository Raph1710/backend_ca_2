const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    dateofbirth: { type: Date, required: true }
});

module.exports = mongoose.model("Signup", signupSchema);