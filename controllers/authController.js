//register
const registerPage = (req, res) => res.status(200).render("register.pug");
const register = (req, res) => {
    
}

//login
const loginPage = (req, res) => res.status(200).render("login.pug");
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