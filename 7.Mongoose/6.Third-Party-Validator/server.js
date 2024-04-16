const express = require("express");
const mongoose = require("mongoose");
const validator = require("validator");
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
    age: {
        type: String,
        required: [true, "Please username is required"],
        validate: {
            validator: (value) => {
                return validator.isInt(value, { min: 0, max: 120 });
            },
            message: "Invalid age"
        },
    },
    email: {
        type: String,
        required: [true, "Please email is required"],
        validate: {
            validator: (value) => {
                return validator.isEmail(value);
            },
            message: "Invalid email"
        },
        
    },
}, {
    timestamps: true
});

//! Compile the schema to form the model
const User = mongoose.model("User", userProfileSchema);

const createDoc = async () => {
    try {
        const userCreated = await User.create({
            age: "110",
            email: "support@gmail.com",
        });
        console.log(userCreated);
    } catch (error) {
        console.log(error);
    }
}
createDoc();

// Start the server
app.listen(PORT, console.log(`Server running on the port ${PORT}`));
