const express = require("express")
const mongoose = require("mongoose")
const Blog = require("./models/blog")
const morgan = require("morgan")


// Express App
const app = express()

// mongoDB connection string
const dbURI = "mongodb+srv://victor:test1234@nodenetninja.hd6g2.mongodb.net/?retryWrites=true&w=majority&appName=NodeNetNinja"

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((error) => console.log(error))

app.set("view engine", "ejs")


// Middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

// Basic Routes
app.get("/", (req, res) => {
    const blogs = [
        {
            id: 1,
            title: "Understanding JavaScript Closures",
            content: "Closures are an important concept in JavaScript. They allow a function to access variables from an outer function scope even after the outer function has returned.",
            snippet: "Key concept for variable scope in JS."
        },
        {
            id: 2,
            title: "A Guide to Asynchronous Programming in Node.js",
            content: "Asynchronous programming is key to writing efficient code in Node.js. This guide covers callbacks, promises, and async/await to help you manage asynchronous tasks.",
            snippet: "Managing async tasks in Node.js."
        },
        {
            id: 3,
            title: "Introduction to React Hooks",
            content: "React Hooks let you use state and other React features without writing a class. This blog explains useState and useEffect, the two most commonly used hooks.",
            snippet: "Using React state with Hooks."
        },
        {
            id: 4,
            title: "Mastering CSS Grid Layout",
            content: "CSS Grid Layout is a powerful tool for creating two-dimensional layouts on the web. Learn the basics of CSS Grid and how to create complex layouts with ease.",
            snippet: "Create complex layouts with CSS Grid."
        },
        {
            id: 5,
            title: "Effective Debugging Techniques in JavaScript",
            content: "Debugging is a crucial skill for any developer. This blog provides tips and tools for debugging JavaScript code effectively, including using console.log, breakpoints, and more.",
            snippet: "Tips for debugging JS code effectively."
        },
        {
            id: 6,
            title: "An Introduction to TypeScript",
            content: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. This blog covers the basics of TypeScript, including types, interfaces, and classes.",
            snippet: "Basics of TypeScript for JavaScript developers."
        },
        {
            id: 7,
            title: "Optimizing Web Performance with Lazy Loading",
            content: "Lazy loading is a technique for optimizing web performance by loading images and other resources only when they are needed. Learn how to implement lazy loading in your projects.",
            snippet: "Improve performance with lazy loading."
        },
        {
            id: 8,
            title: "Understanding the Event Loop in JavaScript",
            content: "The event loop is at the heart of JavaScript's non-blocking I/O model. This blog explains how the event loop works and how it handles asynchronous operations in JavaScript.",
            snippet: "How JS handles async operations."
        },
        {
            id: 9,
            title: "Building RESTful APIs with Express",
            content: "Express is a popular web framework for Node.js that makes it easy to build RESTful APIs. This blog walks through creating a simple API with Express, including routing and middleware.",
            snippet: "Creating RESTful APIs with Express."
        },
        {
            id: 10,
            title: "Getting Started with MongoDB",
            content: "MongoDB is a NoSQL database that stores data in JSON-like documents. This blog provides an introduction to MongoDB, covering installation, CRUD operations, and basic queries.",
            snippet: "Intro to MongoDB and basic operations."
        }
    ];
    res.redirect("/blogs")
})

app.get("/about", (req, res) => {
    res.render("about", { title: "About" })
})


// Blog Routes
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
});

app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('index', { blogs: result, title: 'All blogs' });
        })
        .catch(err => {
            console.log(err);
        });
});

app.post('/blogs', (req, res) => {
    // console.log(req.body);
    const blog = new Blog(req.body);

    blog.save()
        .then(result => {
            res.redirect('/blogs');
        })
        .catch(err => {
            console.log(err);
        });
});

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details' });
        })
        .catch(err => {
            console.log(err);
        });
});



// 404 redirects
app.use((req, res) => {
    res.status(404).render("404", { title: "404" })
})