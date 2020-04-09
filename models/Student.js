const mongoose = require("mongoose");

module.exports = mongoose.model("students",{
    firstname: String,
    lastname: String,
})