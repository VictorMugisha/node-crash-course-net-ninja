const fs = require("fs")

// fs.readFile("./docs/text1.txt", (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data.toString())
// })


// Writing Files in Node
// fs.writeFile("./docs/text1.txt", "Hello World!", () => {
//     console.log("File was written")
// })

// fs.writeFile("./docs/text2.txt", "Hello World!", () => {
//     console.log("File was written")
// })


// Creating and Deleting folders
if (!fs.existsSync("./assets")) {
    fs.mkdir("./assets", (err) => {
        if (err) {
            console.log(err)
        }
        console.log("Folder created")
    })
} else {
    fs.rmdir("./assets", (err) => {
        if (err) {
            console.log(err)
        }
        console.log("Folder deleted")
    })
}


// Deleting Files in Node
if (fs.existsSync("./docs/deleteme.txt")) {
    fs.unlink("./docs/deleteme.txt", (err) => {
        if (err) {
            console.log(err)
        }
        console.log("File deleted successfuly")
    })
}