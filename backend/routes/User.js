import express from 'express';
import { isAuth } from '../middleware/isAuth.js';
import { authUser, callback, failure, fetchUserData, logoutUser } from '../controller/User.js';

const router = express.Router();

router.get('/user/auth/google', authUser);
router.get('/user/auth/google/callback', callback);
router.get('/user/auth/failure', failure);
router.get('/user/auth/logout', isAuth, logoutUser);
router.get('/user/fetchData', isAuth, fetchUserData);

export default router;
