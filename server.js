const http = require("http")
const fs = require("fs")

const server = http.createServer((request, response) => {
    console.log("URL: ", request.url)
    console.log("Method: ", request.method)

    // Sending back a response to the client
    response.setHeader("Content-Type", "text/html")
    fs.readFile("./views/index.html", (error, data) => {
        if (error) {
            console.log(error)
            response.end()
        } else {
            response.write(data)
            response.end()
        }
    })
})

server.listen(3000, "localhost", () => {
    console.log("Listening for request on port 3000...")
})