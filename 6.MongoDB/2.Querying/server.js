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
        // Create a database
        const database = client.db('MERN');
        // Create a Collections
        // const employees = database.collection('employees')
        const books = database.collection('books')
        //* Create
        // const employeesDocs = [
        //     { name: "Alice", age: 25, department: "HR" },
        //     { name: "Bob", age: 30, department: "Finance" },
        //     { name: "Charle", age: 35, department: "IT" },
        //     { name: "Devid", age: 40, department: "Operations" },
        //     { name: "Eva", age: 45, department: "IT" },
        // ]
        //  Insert the data into db
        // const result = await employees.insertMany(employeesDocs);

        //* books creattion
        const booksDocs = [
            {
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                year: 1960,
                genre: "Dram",
            },
            {
                title: "The 1984",
                author: "Geaorge Orwell",
                year: 1949,
                genre: "Dystopian",
            },

            {
                title: "The Catcher in the Rye",
                author: "JD",
                year: 1951,
                genre: "Drama",
            },
            {
                title: "The Brave World",
                author: "Huxley",
                year: 1932,
                genre: "Dysptopian",
            },
            {
                title: "The Hobbit",
                author: "J.R.R",
                year: 1937,
                genre: "Fantasy",
            },
        ];
        //   const result = await books.insertMany(booksDocs);
        //   console.log(result);

        // !------------QUERYING-OPERATORS(BASIC)-----------------
        //! --$gt(grater than)
        // const employeesCursor = employees.find({age: {$gt: 30}})
        // const result = await employeesCursor.toArray();
        // console.log(result);

        //! --$gte(grater than and equal to)
        // const employeesCursor = employees.find({age: {$gte: 30}})
        // const result = await employeesCursor.toArray();
        // console.log(result);

        //! --$ne(Not equal to)
        // const employeesCursor = employees.find({ age: { $ne: 40 } })
        // const result = await employeesCursor.toArray();
        // console.log(result);

        //! --$lt(lass than)
        // const employeesCursor = employees.find({ age: { $lt: 40 } })
        // const result = await employeesCursor.toArray();
        // console.log(result);

        //! --$lte(lass than and equal to)
        // const employeesCursor = employees.find({ age: { $lte: 40 } })
        // const result = await employeesCursor.toArray();
        // console.log(result);

        //! --$nin(Not inclusive)
        // const employeesCursor = employees.find({ age: { $nin: [25, 45, 30] } })
        // const result = await employeesCursor.toArray();
        // console.log(result);

        //! --Multiple Condition
        // const employeesCursor = employees.find({ age: { $gt: 30, $lte: 45 } })
        // const result = await employeesCursor.toArray();
        // console.log(result);


        // !------------QUERYING-OPERATORS(LOGICAL)-----------------
        //! --$or ('OR' Operator)
        // const booksCursor = books.find({
        //     $or: [{ genre: "Drama" }, { year: { $lt: 1950 } }],
        // });
        // const result = await booksCursor.toArray()
        // console.log(result);

        //! --$and ('AND' Operator)
        // const booksCursor = books.find({
        //     $and: [{ genre: "Dystopian" }, { year: { $gt: 1930 } }],
        // });
        // const result = await booksCursor.toArray()
        // console.log(result);

        //! --$nor ('NOR' Operator)
        const booksCursor = books.find({
            $nor: [{ genre: "Drama" }, { year: { year: 1930 } }],
        });
        const result = await booksCursor.toArray()
        console.log(result);


    } catch (error) {
        console.log(error);
    }
}

// Call the function
connectDB();

// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));