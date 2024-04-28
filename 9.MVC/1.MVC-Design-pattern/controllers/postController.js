const Post = require("../model/post");


// Show the create form
const showCreateForm = (req, res) => {
    res.render("createPost");
}

// Show post list
const allPosts = async (req, res) => {
    const posts = await Post.find();
    res.render("list", { posts });
}

// Create post logic
const postLogic = async (req, res) => {
    const { title, content, author } = req.body;
    await Post.create({
        title,
        content,
        author,
    });
    //redirect to the post list
    res.redirect("/list");
}

module.exports = {
    showCreateForm,
    allPosts,
    postLogic,
}