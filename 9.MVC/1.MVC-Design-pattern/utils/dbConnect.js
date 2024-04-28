const mongoose = require("mongoose");
const connect = mongoose
    .connect("mongodb://localhost:27017/mvc-design-pattern")
    .then(() => {
        console.log("DB has been connected");
    })
    .catch(e => {
        console.log(e);
    });


module.exports = connect;