import express from 'express';
import { isAuth } from '../middleware/isAuth.js';
import { createScreen, deleteScreen, fetchAllScreen, fetchSingleScreen, updateScreen } from '../controller/Screen.js';

const router = express.Router();

router.post('/Screen/new', isAuth, createScreen);
router.get('/Screen/all-theater', isAuth, fetchAllScreen);
router.get('/Screen/single/:id', isAuth,  fetchSingleScreen);
router.get('/Screen/update/:id', isAuth, updateScreen);
router.get('/Screen/delete', isAuth, deleteScreen);

export default router;
