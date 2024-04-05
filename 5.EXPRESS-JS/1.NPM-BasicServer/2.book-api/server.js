const express = require("express");
const app = express();
const PORT = 8082;

// Receiving incoming data from client configuration
app.use(express.json())

// Book DB
const books = [
    { id: "1", title: "The great Gatsby", author: "F.Scott" },
    { id: "2", title: "The Moby Dic", author: "Herman" },
    { id: "3", title: "The MERN Stack", author: "Ritik" },
]

// Home Route
app.get('/', (req, res) => {
    res.json({
        status: 'success',
        message: 'Welcome to my first book api using express',
        data: "Masyntech",
    })
})

// Fetching all books
app.get("/books", (req, res) => {
    res.json({
        status: "success",
        message: "Books fetched succesfully",
        data: books,
    })
})

// Fetch a book
app.get("/books/:id", (req, res) => {
    const id = req.params.id;
    const bookFound = books.find((book) => book.id === id)
    if (!bookFound) {
        return res.json({
            status: "failed",
            message: `Book with id ${id} not found`,
        })
    }
    res.json({
        status: "success",
        message: "Books fetched succesfully",
        data: bookFound,
    })
})

// Create a book
app.post("/books", (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.json({
        status: "success",
        message: "Books created succesfully",
        data: books,
    })
})

// start the server
app.listen(PORT, console.log(`Server is running on port ${PORT}`));