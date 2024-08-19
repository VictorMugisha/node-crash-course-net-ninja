const http = require("http")

const server = http.createServer((request, response) => {
    console.log("URL: ", request.url)
    console.log("Method: ", request.method)

    // Sending back a response to the client
    response.setHeader("Content-Type", "text/plain")
    response.write("Hello Victor!!")
    response.end()
})

server.listen(3000, "localhost", () => {
    console.log("Listening for request on port 3000...")
})