const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5000 || process.env.PORT;

const URL =
    "mongodb://localhost:27017";
//! Connect to mongoDb
const connectToDB = async () => {
    try {
        await mongoose.connect(URL);
        console.log("Mongodb connected successfully...");
    } catch (error) {
        console.log(`Error connecting to mongodb ${error}`);
    }
};

//* Call the function
connectToDB();

//! Design schema
const userProfileSchema = new mongoose.Schema({
    username: String, //String
    age: Number, //Number
    birthday: Date,
    isActive: Boolean,
    hobbies: [String], //Array of String
    objectId: mongoose.Schema.Types.ObjectId, //ObjectId
    address: {
        street: String,
        city: String,
        postCode: Number
    },//Embed
    customData: mongoose.Schema.Types.Mixed,
})

//! Compile the schema to form the model
const User =  mongoose.model("User", userProfileSchema);

// Start the server
app.listen(PORT, console.log(`Server running on the port ${PORT}`));
