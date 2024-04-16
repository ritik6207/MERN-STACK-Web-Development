const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5000 || process.env.PORT;

const URL = "mongodb://localhost:27017";
//! Connect to mongoDb
const connectToDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Mongodb connected successfully...");
  } catch (error) {
    console.log(`Error connecting to mongodb ${error}`);
  }
};

//* Call the function
connectToDB();

//! Design schema
const userProfileSchema = new mongoose.Schema({
  username: String, //String
  age: Number, //Number
  birthday: Date,
  isActive: Boolean,
  hobbies: [String], //Array of String
  objectId: mongoose.Schema.Types.ObjectId, //ObjectId
  address: {
    street: String,
    city: String,
    postCode: Number,
  }, //Embed
  customData: mongoose.Schema.Types.Mixed,
});

//! Compile the schema to form the model
const User = mongoose.model("User", userProfileSchema);

//!============CRUD OPERATION==============
//*---CREATE DOC---
//! .save()
const newUser = new User({
  username: "Ritik",
  age: 22,
  birthday: new Date("2002-04-01"),
  isActive: true,
  hobbies: ["Cricket", "Reading", "Coding"],
  address: {
    street: "Anand Nagar",
    city: "Bhopal",
    postCode: 462022,
  },
  customData: {
    Country: "India",
  },
});
// Save the document
// newUser
//   .save()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(e => console.log(e));

//! .create()
// User.create({
//     username: "Jhon Deo",
//     age: 22,
//     birthday: new Date("2002-04-01"),
//     isActive: true,
//     hobbies: ["Cricket", "Reading", "Coding"],
//     address: {
//         street: "Anand Nagar",
//         city: "Bhopal",
//         postCode: 462022,
//     },
//     customData: {
//         Country: "India",
//     },
// }).then(data => {
//     console.log(data);
// }).catch(e => console.log(e));

//! .insertMany()
// User.insertMany([
//   {
//     username: "Prince",
//     age: 22,
//     birthday: new Date("2002-04-01"),
//     isActive: true,
//     hobbies: ["Cricket", "Reading", "Coding"],
//     address: {
//       street: "Anand Nagar",
//       city: "Bhopal",
//       postCode: 462022,
//     },
//     customData: {
//       Country: "India",
//     },
//   },
//   {
//     username: "Alice",
//     age: 22,
//     birthday: new Date("2002-04-01"),
//     isActive: true,
//     hobbies: ["Cricket", "Reading", "Coding"],
//     address: {
//       street: "Anand Nagar",
//       city: "Bhopal",
//       postCode: 462022,
//     },
//     customData: {
//       Country: "India",
//     },
//   },
// ])
//   .then(data => {
//     console.log(data);
//   })
//   .catch(e => console.log(e));

//*---READ DOC---
//! .find()
// User.find().then((user) => {
//     console.log(user);
// }).catch(e => console.log(e))

//! .findOne()
// User.findOne({
//     age: 22,
//     username: "Prince",
// }).then((user) => {
//     console.log(user);
// }).catch(e => console.log(e))

//! .findById()
// User.findById('661bd98dbd644ff7f736233d').then((user) => {
//     console.log(user);
// }).catch(e => console.log(e))

//! .where()
// const findUser = async () => {
//     try {
//         const users = await User.find().where('age').gte(20)
//         console.log(users);
//     } catch (error) {
//         console.log(error);
//     }
// }
// findUser();

//! .sort()
// const findUser = async () => {
//   try {
//     const users = await User.find().where("age").gte(20).sort({ username: 1 });  //Heer -1 -> decending order and 1 -> acending order
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };
// findUser();

//! .limit()
// const findUser = async () => {
//   try {
//     const users = await User.find()
//       .where("age")
//       .gte(20)
//       .sort({ username: 1 })
//       .limit(1);
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };
// findUser();

//*---UPDATE DOC---
//! .updateOne()
// const updateDoc = async () => {
//   try {
//     const updateDoc = await User.updateOne(
//       {
//         username: "Jhon Deo",
//       },
//       {
//         age: 30,
//         isActive: false,
//       },
//       {
//         new: true,
//       }
//     );
//     console.log(updateDoc);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();

//! .findByIdUpdate()
// const updateDoc = async () => {
//     try {
//       const updateDoc = await User.findByIdAndUpdate(
//         '661bd98dbd644ff7f736233c',
//         {
//           age: 46,
//           isActive: false,
//           username: "Thomas",
//         },
//         {
//           new: true,
//         }
//       );
//       console.log(updateDoc);
//     } catch (error) {
//       console.log(error);
//     }
//   };
// updateDoc();

//! .findOneAndUpdate()
// const updateDoc = async () => {
//   try {
//     const updateDoc = await User.findOneAndUpdate(
//       {
//         username: "Alice",
//       },
//       {
//         age: 46,
//         isActive: false,
//       },
//       {
//         new: true,
//       }
//     );
//     console.log(updateDoc);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();

//! ----Update Operators()------
//!  $set $unset
// const updateDoc = async () => {
//   try {
//     const updateDoc = await User.findOneAndUpdate(
//       {
//         username: "Alice",
//       },
//       {
//         $set: {username: "Ben"},
//         $unset: {age: 1},  //remove the data
//       },
//       {
//         new: true,
//       }
//     );
//     console.log(updateDoc);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();

//!  $addToSet $push, (work only array of object)
// const updateDoc = async () => {
//   try {
//     const updateDoc = await User.findOneAndUpdate(
//       {
//         username: "Jhon Deo",
//       },
//       {
//         // $addToSet: { hobbies: "Playing Game" }, // if run again it is not to duplicate the object
//         $push: { hobbies: "Playing Game" },  //Its duplicate the object
//       },
//       {
//         new: true,
//       }
//     );
//     console.log(updateDoc);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();


//!  $inc $mul
// const updateDoc = async () => {
//   try {
//     const updateDoc = await User.findOneAndUpdate(
//       {
//         username: "Jhon Deo",
//       },
//       {
//         // $inc: { age: -15},  //work only Numbers if -ve it is decreasing and +ve it is increasing
//         $mul: { age: 2 },
//       },
//       {
//         new: true,
//       }
//     );
//     console.log(updateDoc);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();

//!  $pop $pull
// const updateDoc = async () => {
//   try {
//     const updateDoc = await User.findOneAndUpdate(
//       {
//         username: "Jhon Deo",
//       },
//       {
//         // $pop: {hobbies: 1},  //remove the array of object form the last
//         $pull: {hobbies: "Cricket"}, 
//       },
//       {
//         new: true,
//       }
//     );
//     console.log(updateDoc);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateDoc();

//*---Delete DOC---
const deleteDoc = async () => {
  try {
    //! --FindByIdAndDelete()--
    // const deleteDocs = await User.findByIdAndDelete("661bd98dbd644ff7f736233d");
    // console.log(deleteDocs);
    //! --FindOneAndDelete()--
    // const deleteDocs = await User.findOneAndDelete("Thomas")
    // console.log(deleteDocs);
    //! --deleteMany()--
    const deleteDocs = await User.deleteMany({ age: { $gt: 30 } })
    console.log(deleteDocs);
  } catch (error) {
    console.log(error);
  }
};
deleteDoc();


// Start the server
app.listen(PORT, console.log(`Server running on the port ${PORT}`));
