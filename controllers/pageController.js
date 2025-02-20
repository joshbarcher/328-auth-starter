
const contentPage = (req, res) => {
    res.status(200).render("content.pug", {})
}

const adminPage = (req, res) => {
    res.status(200).render("admin.pug", {})
}

export default { contentPage, adminPage }