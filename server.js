const http = require("http")
const fs = require("fs")

const server = http.createServer((request, response) => {
    console.log("URL: ", request.url)
    console.log("Method: ", request.method)

    // Sending back a response to the client
    response.setHeader("Content-Type", "text/html")
    
    let path = "./views/"

    switch(request.url) {
        case "/":
            path += "index.html"
            break
        case "/about":
            path += "about.html"
            break
        default:
            path += "404.html"
            break
    }

    fs.readFile(path, (error, data) => {
        if (error) {
            console.log(error)
            response.end()
        } else {
            response.end(data)
        }
    })
})

server.listen(3000, "localhost", () => {
    console.log("Listening for request on port 3000...")
})