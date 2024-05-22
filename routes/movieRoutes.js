const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const auth = require('../middleware/middleware')

router.get('/movieList', auth,  movieController.getAllMovies);

router.get('/movies/:id', movieController.getMovieById);

router.post('/createMovie', movieController.createMovie);

router.put('/movies/:id', movieController.updateMovie);

router.delete('/movies/:id', movieController.deleteMovie);

module.exports = router;
