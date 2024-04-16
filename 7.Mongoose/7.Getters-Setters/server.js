const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 8082 || process.env.PORT;

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
const booksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        set: (value) => value.trim()
    },
    author: {
        type: String,
        required: true,
        set: (value) => value.trim()
    },
    price: {
        type: String,
        required: true,
        set: (value) => Math.round(value * 100) / 100,   //rounding to 2 decimal
    },
    tags: {
        type: [String],
        required: true,
        set: (value) => value.map(tag => tag.toLowerCase())
    },
    url: {
        type: String,
        required: true,
        set: (value) => `https://techlearn.com/books/${value}`
    },

}, {
    timestamps: true
});

//! Compile the schema to form the model
const Book = mongoose.model("Book", booksSchema);

const createDoc = async () => {
    try {
        const bookCreated = await Book.create({
            title: "mongoose for everyone",
            author: "techlearn coding school",
            price: 19.9999,
            tags: ["MONGODB", "NODEJS", "MONGOOSE"],
            url: "mongoose-for-everyone",
        });
        console.log(bookCreated);
    } catch (error) {
        console.log(error);
    }
}
createDoc();

// Start the server
app.listen(PORT, console.log(`Server running on the port ${PORT}`));
