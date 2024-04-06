const express = require("express");
const userRouter = require("./routes/usersRouter");
const postRouter = require("./routes/postRouter");
const isAuthenticated = require("./middleware/isAuthenticated");

const app = express();
const PORT = 8082;
// Home Route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the main app",
    })
})
//! ------USERS ROUTE------
app.use("/users", isAuthenticated, userRouter);     //isAuthenticated file is middleware , it's give authentication 
app.use("/posts", postRouter);

// start the server
app.listen(PORT, console.log(`Server is running on port ${PORT}`))