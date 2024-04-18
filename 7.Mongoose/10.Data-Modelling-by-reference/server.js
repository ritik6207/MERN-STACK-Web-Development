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
};

// call the connectDB function
connectDB();

//! Author schema
const authorSchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true }
);

// compile the author schema
const Author = mongoose.model("Author", authorSchema);

//! Books schema
const booksSchema = new mongoose.Schema(
  {
    title: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
  },
  { timestamps: true }
);

// Compile the books schema
const Book = mongoose.model("Book", booksSchema);

// Create  the author
const createAuthor = async () => {
  try {
    // create a new author
    const newDoc = await Author.create({
      name: "Ritik",
    });
    console.log(newDoc);
  } catch (error) {
    console.log(error);
  }
};

createAuthor();

// Start the server
app.listen(PORT, console.log(`Server running on the port ${PORT}`));
