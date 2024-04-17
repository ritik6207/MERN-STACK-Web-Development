const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 8082 || process.env.PORT;

//Connect the DB
const URL = "mongodb://localhost:27017/dataModelling";
const connectDB = async () => {
    try {
        await mongoose.connect(URL);
        console.log("MongoDB connected successfully...");
    } catch (error) {
        console.log(`Error connecting to mongoDB ${error}`);
    }
}

// call the connectDB function
connectDB();

//! Address schema
const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    zip: Number,
}, { timestamps: true });

//! User schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: addressSchema, //Embedded Document
}, { timestamps: true });

//! Compile the schema to form the model
const User = mongoose.model("User", userSchema)

// Create  the user
const createUser = async () => {
    try {
        // create a new user
        const newUser = await User.create({
            name: "Ritik",
            email: "ritik@gmail.com",
            address: {
                street: "178 - Anand Nagar",
                city: "Bhopal",
                state: "Madhaya Pradesh",
                zip: 422022,
            }
        })
        console.log(newUser);
    } catch (error) {
        console.log(error);
    }
}

createUser();


// Start the server
app.listen(PORT, console.log(`Server running on the port ${PORT}`));