const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 8082 || process.env.PORT;

//Connect the DB
const URL = "mongodb://localhost:27017/dataRelationship";
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

//! comments schema
const commentsSchema = new mongoose.Schema(
  {
    text: String,
  },
  { timestamps: true }
);

// compile the comments schema
const Comment = mongoose.model("Comment", commentsSchema);

//! Blog Post schema
const blogPostSchema = new mongoose.Schema(
  {
    title: String,
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

// Compile the blog post schema
const Post = mongoose.model("Post", blogPostSchema);

//! Create  the post
// const createPost = async () => {
//   try {
//     // create a new Post
//     const newDoc = await Post.create({
//       title: "Awesome fullstack cource",
//     });
//     console.log(newDoc);
//   } catch (error) {
//     console.log(error);
//   }
// };

// createPost();

//! Create  the comments
const createComments = async () => {
  try {
    //? 1.Find the post you want to comment
    const postFound = await Post.findById("6620ba18bbca149325bb0f3c");
    console.log(postFound);

    //? 2.Create the comment
    const newComment = await Comment.create({ text: "Great Job!" });
    console.log(newComment);

    //? 3.Push the comment into the post
    postFound.comments.push(newComment._id);

    //? 4.Resave the post
    await postFound.save();

  } catch (error) {
    console.log(error);
  }
};

createComments();

// Start the server
app.listen(PORT, console.log(`Server running on the port ${PORT}`));
