const express = require("express")

// Express App
const app = express()
app.set("view engine", "ejs")

// Listen for requests
app.listen(3000)

app.get("/", (req, res) => {
    // res.send("<h2>This is home page</h2>")
    // res.sendFile("./views/index.html", { root: __dirname })
    res.render("index")
})

app.get("/about", (req, res) => {
    // res.send("<h2>Now you are on about page</h2>")
    // res.sendFile("./views/about.html", { root: __dirname })
    res.render("about")
})

// Handling Redirects
app.get("/about-us", (req, res) => {
    res.redirect("/about")
})

// 404 redirects
app.get("*", (req, res) => {
    // res.status(404).sendFile("./views/404.html", { root: __dirname })
    res.status(404).render("404")
})
// app.use((req, res) => {
//     res.sendFile("./views/404.html", { root: __dirname })
// })