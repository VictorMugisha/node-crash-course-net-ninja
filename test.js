const fs = require("fs")

fs.readFile("./docs/text1.txt", (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data)
})