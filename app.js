const express = require("express")

// Express App
const app = express()

// Listen for requests
app.listen(3000)

app.get("/", (req, res) => {
    res.send("<h2>This is home page</h2>")
})

app.get("/about", (req, res) => {
    res.send("<h2>Now you are on about page</h2>")
})