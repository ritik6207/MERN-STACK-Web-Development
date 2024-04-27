const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const mongoStore = require("connect-mongo");
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
//! Set the view engine
app.set("view engine", "ejs");

//--------CUSTOM MIDDLEWARES------
//!-- isAuthenticated (Authentication)
const isAuthenticated = (req, res, next) => {
    // Check user in the session
    const username = req.session.userData ? req.session.userData.username : null
    if (username) {
        return next();
    } else {
        res.redirect("/login")
    }
}

//!-- isAdmin (Authorization)
const isAdmin = (req, res, next) => {
    // Check user in the session
    const admin = req?.session?.userData?.role === 'admin'
    if (admin) {
        return next();
    } else {
        res.send("Forbidden: access denied");
    }
}

//!--configure Express Session--
app.use(session({
    secret: "gsls039434",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60 * 60 * 1000 //Expire in 1hr
    },
    store: mongoStore.create({
        mongoUrl: "mongodb://localhost:27017/userAuthDB"
    })
}))


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
app.get("/admin-only", (req, res) => {
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
    })
    // Redirect to login
    res.redirect("/login")
});

// Login Route logic
app.post("/login", async (req, res) => {

    const { username, password } = req.body;
    //! Find the user in the DB
    const userFound = await User.findOne({
        username,
    })

    if (userFound && await bcrypt.compare(password, userFound.password)) {
        //! Crate session (save the user into session)
        req.session.userData = {
            username: userFound.username,
            role: userFound.role,
        }
        // ! Add the login user on session

        res.redirect("/dashboard");
    } else {
        res.send("Invalid login credentials");
    }
});

// Dashboard Route
app.get("/dashboard", isAuthenticated, isAdmin, (req, res) => {
    // Take the login user from the session
    const username = req.session.userData ? req.session.userData.username : null
    res.render("dashboard", { username })
});

// Logout Route
app.get("/logout", (req, res) => {
    //! lotout
    req.session.destroy();
    res.redirect("/login");
});

// Start the server
app.listen(3000, console.log("The server is running"));
