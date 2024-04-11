const express = require("express");
const path = require("path");
const app = express();
const PORT = 8082;
//! Server the static files/folder
app.use(express.static(path.join(__dirname, "public")));

//! Set the view engine as ejs
app.set("view engine", "ejs");

// Render Home page/route
app.get("/", (req, res) => {
    res.render("home");
});

// Render About page/route
app.get("/about", (req, res) => {
    res.render("about");
});

// Render Contact  page/route
app.get("/contact", (req, res) => {
    res.render("contact");
});

// Render Gallery page/route
app.get("/gallery", (req, res) => {
    res.render("gallery");
});

// Render userData page/route
app.get("/user", (req, res) => {
    // dummy user content
    const userData = {
        username: "Ritik",
        age: "22",
        isPremiumUser: false,
        email: "ritik@gmail.com",
        isLogin: true,
    };
    res.render("userData", userData);
});

// Render Products page/route
app.get("/products", (req, res) => {
    // dummy products list
    const products = [
        { name: "Laptop", price: 999 },
        { name: "Phone", price: 799 },
        { name: "TV", price: 1200 },
    ];
    res.render("products", { products });
});

//! Start the server
app.listen(PORT, console.log(`Server running on port ${PORT}`));
