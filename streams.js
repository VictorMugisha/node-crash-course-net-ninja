const fs = require("fs")

const readStream = fs.createReadStream("./docs/blog.txt", { encoding: "utf8" })
const writeStream = fs.createWriteStream("./docs/writtenBlog.txt")

// readStream.on("data", (chunk) => {
//     console.log("------------ NEW CHUNK ------------")
//     // console.log(chunk)
//     console.log("")
//     writeStream.write("\n NEW CHUNK \n")
//     writeStream.write(chunk)
// })

// Using piping
readStream.pipe(writeStream)