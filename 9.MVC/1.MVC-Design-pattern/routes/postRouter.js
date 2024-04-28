const express = require("express");
const { showCreateForm, allPosts, postLogic } = require("../controllers/postController");

// Router
const postRouter = express.Router();

//! Show the create form
postRouter.get("/create", showCreateForm);

//! To get all posts
postRouter.get("/list", allPosts);

//! Create the post (The main logic)
postRouter.post("/create", postLogic);


module.exports = postRouter;