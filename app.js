const express = require("express")

// Express App
const app = express()
app.set("view engine", "ejs")

// Listen for requests
app.listen(3000)

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/blogs/create", (req, res) => {
    res.render("create")
})

// 404 redirects
app.use((req, res) => {
    res.status(404).render("404")
})