import User from './../model/user.js';
import passport from 'passport';

//register
const registerPage = (req, res) => res.status(200).render("register", {
    error: req.query.error
});
const register = async (req, res) => {
    if (req.body.password === req.body.confirm) {
        const user = await User.create(req.body);
        console.log(`User created: ${user.username}`);
        return res.redirect("/login");
    }
    res.redirect("/register?error=Passwords do not match!");
}

//login
const loginPage = (req, res) => res.status(200).render("login", {
    error: req.query.error
});
const login = passport.authenticate('local', {
    successRedirect: "/user",
    failureRedirect: "/login?error=Invalid credentials"
})

//logout
const logout = (req, res) => {
    req.logout(err => {
        if (err) return next(err);
        res.redirect("/login");
    })
}

//middleware to protect routes
const isLoggedIn = (req, res, next) => {
    //passport populates req.user during deserialization
    if (!req.user) {
        return res.redirect("/login");
    }
    console.log(`Verified logged in user: ${req.user.username}`);
    next();
}

const hasRole = (role) => {
    return (req, res, next) => {
        if (req.user.role === role) {
            console.log(`${req.user.username} has role ${role}`);
            return next();
        }
        console.log(`${req.user.username} missing role ${role}`);
        res.redirect("/login");
    }
}

export default { registerPage, register, loginPage, login, logout, isLoggedIn, hasRole }