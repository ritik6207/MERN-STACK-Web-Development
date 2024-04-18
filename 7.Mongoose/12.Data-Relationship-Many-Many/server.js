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

//! Courses schema
const coursesSchema = new mongoose.Schema(
  {
    name: String,
    enrollStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" },],
  },
  { timestamps: true }
);

// compile the course schema
const Course = mongoose.model("Course", coursesSchema);

//! Students schema
const studentSchema = new mongoose.Schema(
  {
    name: String,
    enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  },
  { timestamps: true }
);

// Compile the blog post schema
const Student = mongoose.model("Student", studentSchema);


//! Create  the Course
const createCourse = async () => {
  try {
    // create new couse
    const newDoc = await Course.create([
      { name: "Math 101" },
      { name: "History 101" },
    ],)
    console.log(newDoc);
  } catch (error) {
    console.log(error);
  }
};

createCourse();

// Start the server
app.listen(PORT, console.log(`Server running on the port ${PORT}`));
