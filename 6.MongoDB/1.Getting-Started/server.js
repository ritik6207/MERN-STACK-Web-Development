const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
const PORT = 5000;


//! Connect to mongodb
//1. Create the client
const client = new MongoClient("mongodb+srv://{username}:{password}@ritik.ff6rz6b.mongodb.net/students-database", {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})

// function to connect
const connectDB = async () => {
    try {
        await client.connect();
        console.log("MongoDB connected successfully");
        //1. Database name (school) 
        const database = client.db('school');

        //2. Collection (students)
        const students = database.collection('students');

        //!----------CREATE-OPERATION-------------
        //! documents() using the insertOne()
        // const result = await students.insertOne({
        //     name: 'Ritik',
        //     age: 22,
        //     subjects: ['Maths', 'physics'],
        // })
        //! documents() using the insertMany()
        // const results = await students.insertMany([
        //     {
        //         name: 'Jhon',
        //         age: 25,
        //         grade: 'A+',
        //         pass: true,
        //         subjects: ['Maths', 'Physics',],
        //     },
        //     {
        //         name: 'Emma',
        //         age: 26,
        //         grade: 'B+',
        //         pass: false,
        //         subjects: ['Maths', 'Chemistry'],
        //     },
        // ])


        //!----------READ-OPERATION-------------
        //! Find()
        // const resultCursor = students.find();
        // const results = await resultCursor.toArray();
        //! FindOne()
        // const results = await students.findOne({
        //     age:22,
        // })
        // console.log(results);


        //!----------UPDATE-OPERATION-------------
        //! updateOne()
        // const result = await students.updateOne(
        //     {
        //         name:"Akash" //Filtering
        //     },
        //     {
        //         $set: {age: 24, pass: true, grade: 'A', name:'Prawin'}
        //     }
        // )
        //! updateMany()
        // const result = await students.updateMany(
        //     {
        //         grade: 'A'
        //     },
        //     {
        //         $set:{pass: false}
        //     }
        // )
        //! findOneAndupdate()
        // const result = await students.findOneAndUpdate(
        //     {
        //         name: 'Ritik'
        //     },
        //     {
        //         $set: { age: 35 },
        //     }
        // )


        //!----------DELETE-OPERATION-------------
        //! deleteOne()
        // const result = await students.deleteOne(
        //     {
        //         name: "suraj",
        //     }
        // )
        //! deleteMany()
        // const results = await students.deleteMany(
        //     {grade: 'A'}
        // )
        //! findOneAnddelete()
        // const results = await students.findOneAndDelete(
        //     {
        //         name:"Emma",
        //     }
        // )

        console.log(results);
    } catch (error) {
        console.log(error);
    }
}

// Call the function
connectDB();

// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));