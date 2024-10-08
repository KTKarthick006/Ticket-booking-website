import express from 'express';
import { isAuth } from '../middleware/isAuth.js';
import { approveTheater, createTheater, deleteTheater, fetchAllTheater, fetchSingleTheater, rejectTheater, updateTheater } from '../controller/Theater.js';

const router = express.Router();

router.post('/theater/new', isAuth, createTheater);
router.put('/theater/approve/:id', isAuth, approveTheater);
router.put('/theater/reject/:id', isAuth, rejectTheater);
router.get('/theater/all-theater', isAuth, fetchAllTheater);
router.get('/theater/single/:id', isAuth,  fetchSingleTheater);
router.get('/theater/update/:id', isAuth, updateTheater);
router.get('/theater/delete', isAuth, deleteTheater);

export default router;
