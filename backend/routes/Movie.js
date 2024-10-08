import express from 'express';
import { isAuth } from '../middleware/isAuth.js';
import { uploadFiles } from '../middleware/Multer.js';
import { createMovie, deleteMovie, fetchAllMovies, fetchSingleMovie, updateMovie } from '../controller/Movie.js';

const router = express.Router();

router.post('/movie/new', isAuth, uploadFiles, createMovie);
router.get('/movie/all-movies', isAuth, fetchAllMovies);
router.get('/movie/single/:id', isAuth, fetchSingleMovie);
router.put('/movie/update/:id', isAuth, updateMovie);
router.delete('/movie/delete/:id', isAuth, deleteMovie);

export default router;
