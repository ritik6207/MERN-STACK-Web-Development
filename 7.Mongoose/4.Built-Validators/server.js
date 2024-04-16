const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5000 || process.env.PORT;

const URL = "mongodb://localhost:27017/LearnValidators";
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

//! Design Schema
const userProfileSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please username is required"],
        unique: true,
        minLength: 3,
        maxLength: 10,
    },
    email: {
        type: String,
        required: [true, "Please email is required"],
        match: /@/,
    },
    age: {
        type: Number,
        required: [true, "Please age is required"],
        min: 18,
        max: 65,
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        default: "Other",
    },
}, {
    timestamps: true
});

//! Compile the schema to form the model
const User = mongoose.model("User", userProfileSchema);

const createDoc = async () => {
    try {
        const userCreated = await User.create({
            username: "Ritik",
            gender: "Male",
            age: 22,
            email: "ritik@gmail.com"
        });
        console.log(userCreated);
    } catch (error) {
        console.log(error);
    }
}
createDoc();

// Start the server
app.listen(PORT, console.log(`Server running on the port ${PORT}`));
