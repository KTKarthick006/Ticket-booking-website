import express from 'express';
import { isAuth } from '../middleware/isAuth.js';
import { bookTicket } from '../controller/Booking.js';

const router = express.Router();

router.post('/Booking/new', isAuth, bookTicket);

export default router;
