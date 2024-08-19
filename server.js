const http = require("http")

const server = http.createServer((request, response) => {
    console.log("Request made and received")
    console.log("response: ", request)
    console.log("response: ", response)
})

server.listen(3000, "localhost", () => {
    console.log("Listening for request on port 3000...")
})