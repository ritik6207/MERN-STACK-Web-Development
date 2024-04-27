const express = require("express");
const app = express();
const PORT = 3000;

// Simulate an in the middleware
app.use((req, res, next) => {
    //! Simulate an error Condition
    const isError = true;
    if(isError){
        // Create an error obj
        const err = new Error("User not found");
        next(err);
    }else{
        next();
    }
})

// Regular route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to built in error handler",
    })
})

// Custom error handling middleware
app.use((err, req, res, next) => {
    // setting HTTP status code
    console.error(err.stack);
    res.status(err.status || 500);
    res.json({
        message: err.message,
        stack: err.stack,
    })
})



// start the server
app.listen(PORT, console.log(`Server is running on the port ${PORT}`))