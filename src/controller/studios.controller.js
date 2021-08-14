const mongoose = require("mongoose");
const Studio = require("../model/studio");


const postStudio = async (req, res) => {
    const createStudio = new Studio({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        createdIn: req.body.createdIn
    });

    const repeatedName = await Studio.findOne({ name: req.body.name })
    if (repeatedName) {
        res.status(409).json({ error: "Estúdio já cadastrado."})
    } else {
        try {
            const newStudio = await createStudio.save();
            res.status(201).json(newStudio)
        } catch(err) {
            res.status(400).json({ message: err.message })
        }
    }

};


module.exports = {
    postStudio
};