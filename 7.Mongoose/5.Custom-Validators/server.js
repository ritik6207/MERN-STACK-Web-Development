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
        validate: {
            validator: function(value) {
                return /^[a-zA-Z0-9]+$/.test(value);
            },
            message: "Username can only contain alphanumeric character"
        }
    },
    email: {
        type: String,
        required: [true, "Please email is required"],
        validate: {
            validator: function(value) {
                return value.endsWith("@gmail.com")
            },
            message: "Email must be from the domain @gmail.com"
        }
    },
}, {
    timestamps: true
});

//! Compile the schema to form the model
const User = mongoose.model("User", userProfileSchema);

const createDoc = async () => {
    try {
        const userCreated = await User.create({
            username: "Prince231",
            email: "support@gmail.com"
        });
        console.log(userCreated);
    } catch (error) {
        console.log(error);
    }
}
createDoc();

// Start the server
app.listen(PORT, console.log(`Server running on the port ${PORT}`));
