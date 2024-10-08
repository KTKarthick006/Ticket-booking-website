import express from 'express';
import dotenv from 'dotenv';
import ConnectDb from './database/db.js';
import './config/Auth.js';
import passport from 'passport';
import sessionMiddleware from './middleware/sessionMiddleware.js';
import { isAuth } from './middleware/isAuth.js';

const app = express();

dotenv.config();

const port = process.env.PORT;

app.use(express.json()); 

app.use(sessionMiddleware); 
app.use(passport.initialize()); 
app.use(passport.session()); 

// Import Router
import userRouter from './routes/User.js';
import movieRouter from './routes/Movie.js';
import theaterRouter from './routes/Theater.js';
import screenRouter from './routes/Screen.js';
import bookingRouter from './routes/Booking.js';

app.use('/api/', userRouter);
app.use('/api/', movieRouter);
app.use('/api/', theaterRouter);
app.use('/api/', screenRouter);
app.use('/api/', bookingRouter);

app.get('/', isAuth, (req, res) => {
    res.send('Ticket Booking Website');
});

app.listen(port, () => {
    console.log(`Server running in Port ${port}`);
    ConnectDb();
});
