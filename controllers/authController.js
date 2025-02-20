//register
const registerPage = (req, res) => res.status(200).render("register.pug", {
    error: req.query.error
});
const register = (req, res) => {
    
}

//login
const loginPage = (req, res) => res.status(200).render("login.pug", {
    error: req.query.error
});
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