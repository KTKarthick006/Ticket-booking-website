import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import dotenv from 'dotenv';
import { User } from '../models/User.js';

dotenv.config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/user/auth/google/callback",
    passReqToCallback: true
  },
  async function (request, accessToken, refreshToken, profile, done) {
    try {
        const existingUser = await User.findOne({ google_id:profile.id });
        if(existingUser) {
            return done(null, existingUser);
        }
        const newUser = await User.create({
            name: profile.name.givenName,
            email: profile.emails[0].value,
            google_id: profile.id,
        });
        done(null, newUser);
    } catch (error) {
        done(error);
    }
  }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});