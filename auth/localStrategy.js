import passport from 'passport';
import User from './../model/user.js';

//serializing user into session data
passport.serializeUser((user, done) => {
    done(null, user.userId);
})

//deserialize user from session data
passport.deserializeUser(async (userId, done) => {
    const user = await User.findByPk(userId);
    if (user) {
        done(null, user);
    } else {
        done(new Error("User not found!", null));
    }
})

//add local strategy middleware provided by passport.js
