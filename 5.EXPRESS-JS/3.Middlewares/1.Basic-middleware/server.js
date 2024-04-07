const express = require("express");
const app = express();
const PORT = 8082;

//? ---------BUILT-IN-MIDDLEWARES--------
//! serve static files
// app.use(express.static())

//! Pass incoming data
app.use(express.json());

//! Pass the url
// app.use(express.urlencoded())

//? ---------APP-LEVEL-MIDDLEWARES--------
// Logging details of every request
const logRequest = (req, res, next) => {
    console.log(
        `Requst received at: ${new Date().toISOString()} for ${req.method} to ${req.path
        }`
    );
    // Call next
    next();
};

app.use(logRequest);

// Home Route
app.get("/", (req, res) => {
    // console.log(req.body);
    res.json({
        message: "Welcome to this app",
    });
});

// Create a book
app.post("/books", (req, res) => {
    console.log(req.body);
    res.json({
        message: "Built in middleware",
    });
});

// start server
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
