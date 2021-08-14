const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    genre: { type: String, required: true },
    description: { type: String, required: true },
    studio: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "studio" },
    createdIn: { type: Date, required: true, default: new Date }
});


module.exports = mongoose.model("movie", moviesSchema)