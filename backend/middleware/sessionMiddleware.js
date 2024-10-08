import session from 'express-session';
import dotenv from 'dotenv';

dotenv.config();

const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
});

export default sessionMiddleware;
