const mongoose = require("mongoose");

const studioSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    createdIn: { type: Date, required: true, default: new Date }
});


module.exports = mongoose.model("studio", studioSchema);