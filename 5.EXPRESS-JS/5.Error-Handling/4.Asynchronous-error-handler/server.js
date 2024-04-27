const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3000;

// Route to fetch posts
app.get('/posts', async (req, res, next) => {
    try {
        const response = await axios.get('https://jsonplaceddholder.typicode.com/posts')
        res.json(response.data)
    } catch (error) {
        next(error);
    }
})

// Regular route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Asynchronous error handler",
    })
})

// Custom error handling middleware
app.use((err, req, res, next) => {
    // setting HTTP status code
    if(err.response){
        res.status(err.response.status).json(err.response.data)
    }else if (err.request){
        res.status(503).json({
            message: 'Service unavailable'
        })
    } else{
        res.status(500).json({
            message: "Something broke!!!"
        })
    }
})



// start the server
app.listen(PORT, console.log(`Server is running on the port ${PORT}`))