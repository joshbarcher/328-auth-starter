import User from './../model/user.js';

//register
const registerPage = (req, res) => res.status(200).render("register");
const register = async (req, res) => {
    if (req.body.password === req.body.confirm) {
        const user = await User.create(req.body);
        console.log(`User created: ${user.username}`);
        return res.redirect("/login");
    }
    res.render("register");
}

//login
const loginPage = (req, res) => res.status(200).render("login");
const login = (req, res) => {
    
}

//logout
const logout = (req, res) => {
    
}

//middleware to protect routes
const isLoggedIn = (req, res, next) => {

}

const hasRole = (req, res, next) => {

}

export default { registerPage, register, loginPage, login, logout, isLoggedIn, hasRole }