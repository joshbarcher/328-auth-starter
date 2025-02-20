import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
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
        done(new Error("User not found!"), null);
    }
})

//add local strategy middleware provided by passport.js
passport.use(new LocalStrategy(async (username, password, done) => {
    //match user record
    const userFound = await User.findOne({
        where: { username: username },
        attributes: ['userId', 'username', 'password']
    })
    if (!userFound) done(new Error("User not found"), null);

    //match password
    const passwordMatch = await User.validatePassword(password, userFound.password);
    if (!passwordMatch) done(new Error("Invalid password"), null);

    //success!
    return done(null, userFound);
}))
