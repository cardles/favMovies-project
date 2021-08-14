const mongoose = require("mongoose");
const Movie = require("../model/movie");

const getAllMovies = async (req, res) => {
    const movies = await Movie.find().populate('studio')
    res.status(201).json(movies)
};

const postMovie = async (req, res) => {
    const createMovie = new Movie({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        genre: req.body.genre,
        description: req.body.description,
        studio: req.body.studio,
        createdIn: req.body.createdIn
    })

    try {
        const newMovie = await createMovie.save();
        res.status(201).json(newMovie)
    } catch(err) {
        res.status(400).json({ message: err.message})
    }
};

module.exports = {
    getAllMovies,
    postMovie
};
