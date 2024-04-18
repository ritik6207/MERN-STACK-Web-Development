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
}

// call the connectDB function
connectDB();

//! Students schema
const studentsSchema = new mongoose.Schema({
    name: String,
    age: Number,
    grade: String,
}, { timestamps: true });

//! classRoom schema
const classroomSchema = new mongoose.Schema({
    className: String,
    students: [studentsSchema],
}, { timestamps: true });

//! Compile the schema to form the model
const ClassRoom = mongoose.model("ClasssRoom", classroomSchema)

// Create  the classroom
const createClassroom = async () => {
    try {
        // create a new user
        const newClassroom = await ClassRoom.create({
            className: "Math 101",
            students: [
                { name: "Alice", age: 20, grade: "A" },
                { name: "Bob", age: 22, grade: "B" },
            ],
        })
        console.log(newClassroom);
    } catch (error) {
        console.log(error);
    }
}

createClassroom();


// Start the server
app.listen(PORT, console.log(`Server running on the port ${PORT}`));