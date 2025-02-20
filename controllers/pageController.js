
const userPage = (req, res) => {
    res.status(200).render("user", {})
}

const adminPage = (req, res) => {
    res.status(200).render("admin", {})
}

export default { userPage, adminPage }