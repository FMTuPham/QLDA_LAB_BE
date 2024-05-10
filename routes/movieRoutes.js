const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

// Route để lấy tất cả các movie
router.get('/movies', movieController.getAllMovies);

// Route để lấy một movie dựa trên ID
router.get('/movies/:id', movieController.getMovieById);

// Route để tạo một movie mới
router.post('/movies', movieController.createMovie);

// Route để cập nhật thông tin của một movie
router.put('/movies/:id', movieController.updateMovie);

// Route để xóa một movie
router.delete('/movies/:id', movieController.deleteMovie);

module.exports = router;
