const express = require("express");
const app = express();
const postRouter = require("./routes/postRouter");
const connect = require("./utils/dbConnect");

const PORT = 3000;

//!Configure ejs
app.set("view engine", "ejs");

//!Middlewares
app.use(express.urlencoded({ extended: true }));

//!. Show Homepage
app.get("/", (req, res) => {
  res.render("index");
});

//!---Router---
app.use('/', postRouter)

//Start the server
app.listen(PORT, console.log(`The server is running on port ${PORT}`));
