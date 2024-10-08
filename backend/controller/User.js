import passport from 'passport';

// authUser
export const authUser = (req, res, next) => {
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
    (req, res, next);
};

// callback
export const callback = (req, res, next) => {
    passport.authenticate('google', (error, user, info) => {
        if (error) {
            return next(error); 
        }
        if (!user) {
            return res.redirect('/api/user/auth/failure'); 
        }
        req.logIn(user, (error) => {
            if (error) {
                return next(error);
            }
            return res.redirect('/');
        });
    })
    (req, res, next);
};


// failure
export const failure = (req, res) => {
    res.status(401).json({message: "Authentication failed. Please try again."});
}

// logoutUser
export const logoutUser = async (req, res) => {
    try {
        req.session.destroy((error) => {
            if (error) {
                return res.status(500).json({message: "Logout failed."});
            }
            res.redirect('/');
        });
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

// fetchUserData
export const fetchUserData = (req, res) => {
    if (req.user) {
        res.status(200).json(req.user);
    } else {
        res.status(401).json({message: "User not authenticated."});
    }
};

