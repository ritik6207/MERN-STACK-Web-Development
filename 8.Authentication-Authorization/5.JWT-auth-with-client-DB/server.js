const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cookieparser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const app = express();

//! Connect to Mongoose
mongoose
    .connect("mongodb://localhost:27017/userAuthDB")
    .then(() => {
        console.log("DB has been connnected");
    })
    .catch(e => {
        console.log(e);
    });

//!  Create the user Schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: {
        type: String,
        default: "user",
    },
});

//! Compile the schema to from model
const User = mongoose.model("User", userSchema);

//! Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());
//! Set the view engine
app.set("view engine", "ejs");

//--------CUSTOM MIDDLEWARES------
//!-- isAuthenticated (Authentication)
const isAuthenticated = (req, res, next) => {
    // Access the token from req.cookies
    const token = req.cookies ? req.cookies.token : null
    // redirect
    if (!token) {
        return res.redirect("/login");
    }
    // Verify the token
    jwt.verify(token, 'anykey', (err, decoded) => {
        // console.log(err);
        if (err) return res.redirect('/login')
        // Add the user into the req obj
        req.userData = decoded;
        next();
    })
};

//!-- isAdmin (Authorization)
const isAdmin = (req, res, next) => { };

// Home Route
app.get("/", (req, res) => {
    console.log(req.session);
    res.render("home");
});

// Login Route (login from)
app.get("/login", (req, res) => {
    res.render("login");
});

// Admin Route (Admin page)
app.get("/admin-only", isAuthenticated, isAdmin, (req, res) => {
    res.render("admin");
});

// Register Route (Register from)
app.get("/register", (req, res) => {
    res.render("register");
});

// Register Logic (Register from)
app.post("/register", async (req, res) => {
    //! Destructure the req.body
    const { username, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    //Create a new user
    await User.create({
        username,
        password: hashPassword,
    });
    // Redirect to login
    res.redirect("/login");
});

// Login Route logic
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    //! Find the user in the DB
    const userFound = await User.findOne({
        username,
    });

    if (userFound && (await bcrypt.compare(password, userFound.password))) {
        //! Generate the token
        const token = jwt.sign(
            {
                username: userFound.username,
                role: userFound.role,
            },
            "anykey",
            {
                expiresIn: "3d",
            }
        );
        // save the token into cookie
        res.cookie("token", token, {
            maxAge: 3 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        })
        console.log(token);
        console.log(req.cookies);
        res.redirect("/dashboard");
    } else {
        res.send("Invalid login credentials");
    }
});

// Dashboard Route
app.get("/dashboard", isAuthenticated, (req, res) => {
    // Take the login user from the req obj
    const username = req.userData ? req.userData.username : null;
    if (username) {
        res.render("dashboard", { username })
    }
    //   redirect
    res.redirect("/login")
});

// Logout Route
app.get("/logout", (req, res) => {
    //! lotout
    res.clearCookie("token")
    // redirect
    res.redirect("/login");
});

// Start the server
app.listen(3000, console.log("The server is running"));
