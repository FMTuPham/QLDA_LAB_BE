// const express = require('express');
// const app = express();
// app.use(express.json());

// app.get('/movies', async (req, res) => {
//   const movies = await Movie.findAll();
//   res.json(movies);
// });

// app.post('/movies', async (req, res) => {
//   const newMovie = await Movie.create(req.body);
//   res.json(newMovie);
// });

// app.get('/movies/:id', async (req, res) => {
//   const movie = await Movie.findByPk(req.params.id);
//   res.json(movie);
// });

// app.put('/movies/:id', async (req, res) => {
//   const movie = await Movie.findByPk(req.params.id);
//   await movie.update(req.body);
//   res.json(movie);
// });

// app.delete('/movies/:id', async (req, res) => {
//   const movie = await Movie.findByPk(req.params.id);
//   await movie.destroy();
//   res.json({ message: 'Movie deleted' });
// });

// app.listen(3000, () => console.log('Server is running on port 3000'));

const Movie = require('../models/movie.model');

exports.getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.findAll();
        res.json(movies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getMovieById = async (req, res) => {
    const id = req.params.id;
    try {
        const movie = await Movie.findByPk(id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(movie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.createMovie = async (req, res) => {
    const { title, description, releaseYear } = req.body;
    try {
        const newMovie = await Movie.create({ title, description, releaseYear });
        res.status(201).json(newMovie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.updateMovie = async (req, res) => {
    const id = req.params.id;
    const { title, description, releaseYear } = req.body;
    try {
        const movie = await Movie.findByPk(id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        movie.title = title;
        movie.description = description;
        movie.releaseYear = releaseYear;
        await movie.save();
        res.json(movie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deleteMovie = async (req, res) => {
    const id = req.params.id;
    try {
        const movie = await Movie.findByPk(id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        await movie.destroy();
        res.json({ message: 'Movie deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
