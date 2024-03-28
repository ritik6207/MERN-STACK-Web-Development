//!-------Nested Timeout Function---------

const task1 = (callback) => {
    setTimeout(() => {
        console.log("Task 1 Completed");
        callback();
    }, 3000)
}

const task2 = (callback) => {
    setTimeout(() => {
        console.log("Task 2 Completed");
        callback();
    }, 2000)
}

const task3 = (callback) => {
    setTimeout(() => {
        console.log("Task 3 Completed");
        callback();
    }, 1000)
}

// start the first task

// task1(function(){
//     // Once the first is completed start the second
//     task2(function(){
//         // second the first is completed start the third
//         task3(function(){
//             console.log("All the tasks complete");
//         })
//     })
// })



//! --- fetch user data(dummy)
const userData = { id: 1, name: "Ritik Kumar" };
const userPost = [
    { id: 101, content: "Post 1" },
    { id: 102, content: "Post 2" },
];
const postComment = {
    101: ["comment 1", "comment"],
    102: ["comment 2", "comment"],
}

// fetch user data
const fetchUserData = (userId, callback) => {
    console.log("Fetching user data....");
    setTimeout(() => {
        callback(userData);
    }, 1000)
}

// fetch user Post
const fetchUserPost = (userId, callback) => {
    console.log("Fetching user Post...");
    setTimeout(() => {
        callback(userPost);
    }, 1000)
}

// fetch  PostComment
const fetchPostComment = (postId, callback) => {
    console.log("Fetching user PostComment...");
    setTimeout(() => {
        callback(postComment[postId] || []);
    }, 1000)
}


// initiate the process
fetchUserData(1, function (userData) {
    console.log("User data ", userData);
    fetchUserPost(userData.id, function (userPost) {
        console.log("User Post ", userPost);
        userPost.forEach(function (post) {
            console.log("Post ", post);
            fetchPostComment(post.id, function (comments) {
                console.log("Comments  ", comments);
            })
        })
    })
})