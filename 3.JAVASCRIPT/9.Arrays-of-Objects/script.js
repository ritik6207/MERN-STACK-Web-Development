//?------------------------------------
//! The concept of Objects Being Passed by Reference
//?------------------------------------

//! Modifying Object Through a Different Reference
const person1 = {name:"Ritik", age:20}

const person2 = person1;
//Modigy age
person2.age = 30;

person1.name = "Geeta"
// console.log('person2',person2);
// console.log('person1',person1);


//! Passing Object to a Function
const incrementAge = (personObj) => {
    personObj.age += 1;
}
// Person Obj
const bob = {name:"Bob", age:40};
// console.log("Before", bob);
incrementAge(bob);
// console.log("After", bob);



//?------------------------------------
//! Objects in Arrays
//?------------------------------------

//! Scenario: Managing a List o Student
// In this example, we'll create a simple list of students where each student is an object with properties like,   `id`, `name`, and `grade`

const students = [
    {id:1, name:"Bob", grade:"A"},
    {id:2, name:"Alice", grade:"B"},
];
// Access Student
const student1 = students[0].name;
// console.log(student1);
// console.log(students);


//* Add new Student
const addStudent = (id, name, grade) => {
    const newStudent = {id, name, grade};
    // push the new student into the students array
    students.push(newStudent);
};

addStudent(3, "Emmanuel", "C");
// console.log(students);


//* Upgrade a student
const updateStudentGrade = (id, newGrade) => {
    // Find the student by id
    const studentFound = students.find((student) => {
        return student.id === id;
    });
    if(studentFound){
        studentFound.grade = newGrade;
    }else{
        console.log("Student Not Found");
    }
};
// updateStudentGrade(2, "C+");
// console.log(students);



//?------------------------------------
//! Arrays In Objects
//?------------------------------------

//! Scenario: Managing a Simple To-Do List
// Here, we'll create a simple `ToDoList` object that has a `tasks` array property. Each object inside the `tasks` array will have properties like `id`, `description`, and `completed`.

const todoLists = {
    title:"To-Do List Applicatoin",
    tasks:[
        {id: 1, description: "Buy Greoceries", completeed: false},
        {id: 2, description: "Go to Gym", completeed: false},
        {id: 3, description: "Call Mom", completeed: true},
    ],
};
// Accessing Properties
const todoTitle = todoLists.title;
// tasks
const allTasks = todoLists.tasks;
// console.log(allTasks);


//* Function to add a task
const addTask = (description) => {
    // Get new Id
    const newId = todoLists.tasks.length + 1;
    const newTask = {
        id: newId, //Math.random(),
        completeed: false,
        description,
    };
    // Push the new task into the original task
    todoLists.tasks.push(newTask);
};
// call Fn
addTask("Programming");
// console.log(todoLists);

//* Function to mark a task as completed
const markAsCompleted = (id) => {
    // Find the task
    const foundTask = todoLists.tasks.find((task) => task.id === id)
    if(foundTask) {
        foundTask.completeed = true;
    }else{
        console.log("Task not found");
    }
}
// markAsCompleted(2);
// console.log(todoLists);




//?------------------------------------
//! Iterate through arrays using `forEach()`
//?------------------------------------
//! Basic example
const fruits = [
    {name: "Apple", color: "red"},
    {name: "Banana", color: "yellow"},
    {name: "cherry", color: "red"},
];

fruits.forEach((currentValue, index, array) => {
    // console.log(currentValue, index, array);
});


//! Case Study: Online Shopping Cart Calculation
// Suppose you are working on an e-commerece website, and you need to calculate the total price of items in a user's shopping cart. Each item in the cart is represented as an object in an array with properties such a 'name', 'price', and 'quantity'. Your task is to calculate the total cost of items in the cart and also list the names of all items in the cart in the cart for the user's review.


// Initial Data
const cart = [
    {name: "Laptop", price: 43630, qty: 1},
    {name: "i-Phone", price: 65000, qty: 2},
    {name: "Tv", price: 23000, qty: 1},
    {name: "Headphones", price: 1751, qty: 3},
];
// Calculate the total cost of the items in the cart.
let totalCost = 0;
cart.forEach((item) => {
    // Sum all the product prices
    totalCost += item.price * item.qty;
});
// console.log('Total Cost of Product: ', totalCost);


// List all the names of the products
let productNames = [];
cart.forEach((item) =>{
    productNames.push(item.name)
})
// console.log(productNames);


// Calculate the Total Number of Items
let totalItems = 0;
cart.forEach((item) => {
    totalItems += item.qty;
})
// console.log('Total Intems of Produtct: ', totalItems);



//?------------------------------------
//! Iterate through arrays using `map()`
//?------------------------------------
// Suppose we have an array of products in a shopping cart. Each object represents a product with a name and a price. We want to apply a 10% discount to all products.

// Initial Data
const shoppingCart = [
    {name: "Laptop", price: 43630, qty: 1},
    {name: "i-Phone", price: 65000, qty: 2},
    {name: "Tv", price: 23000, qty: 1},
    {name: "Headphones", price: 1751, qty: 3},
];

// Add 10% discount
const discountCart = shoppingCart.map((product) =>{
    return{
        name: product.name,
        price: product.price * 0.9,
    };
});
// console.log(discountCart);


//   get all the product names only
const productNamesOnly = shoppingCart.map((product) =>{
    return{
        name: product.name,
    };
});
// console.log(productNamesOnly);



//?------------------------------------
//! Iterate through arrays using `filter()`
//?------------------------------------

//! Filtering Active Useres
const users = [
    {id: 1, isActive: false, name: "Bob"},
    {id: 2, isActive: true, name: "Emmanuel"},
    {id: 3, isActive: false, name: "Alice"},
];
// filtering out active users
const activeUsers = users.filter((user) => {
    return user.isActive === true;
})
// console.log(activeUsers);



//! Transactions Above a Certain Amount
const transactions = [
    {id: 1, amount: 50},
    {id: 2, amount: 150},
    {id: 3, amount: 200},
    {id: 4, amount: 250},
];
// filter out all amount above 100
const largeTransactions = transactions.filter(
    (transaction) => transaction.amount > 100
);
// console.log(largeTransactions);




//?------------------------------------
//! Transformation and Manipulation Using `splice()`
//?------------------------------------

// Remove inActive useres
const usersArr = [
    {id: 1, isActive: false, name: "Bob"},
    {id: 2, isActive: true, name: "Emmanuel"},
    {id: 3, isActive: true, name: "Alice"},
];
// Find the index of the user to be removed
const indexRemove = usersArr.findIndex(
    (user) => user.id === 1 && !user.isActive
);
// console.log(indexRemove);

//* Use splice
if(indexRemove !== -1){
    usersArr.splice(indexRemove, 1);
}
// console.log(usersArr);

//! Managing playlist

// case study: you're developing a playlist feature for a music streming app. Users can add and remove songs to their playlist. Each playlist is an array of song objects. You have to implement features that allow the user to delete a song, move a song up or down the playlist, and insert a song at particualr index.

// Solution
const playlist = [
    {id: "s1", title: "song 1", artist: "Artist A"},
    {id: "s2", title: "song 2", artist: "Artist B"},
    {id: "s3", title: "song 3", artist: "Artist C"},
    {id: "s4", title: "song 4", artist: "Artist D"},
    {id: "s5", title: "song 5", artist: "Artist E"},
    {id: "s6", title: "song 6", artist: "Artist F"},
];

//* Remove song of id of s1
const songIndexToRemove = playlist.findIndex(function(song){
    return song.id === "s1";
});

// Using splice
// if(songIndexToRemove !== -1){
//     playlist.splice(songIndexToRemove, 1);
// }
// console.log(playlist);


//* Move a song of id of s1 to third position
const indexToMove = playlist.findIndex((song) => song.id === "s1");
if(indexToMove !== -1){
    const [songToMove] = playlist.splice(indexToMove, 1);
    playlist.splice(2, 0, songToMove);
}
// console.log(playlist);


//* Insert new Song
const newSong = {id:"s7", title:"song 7", artist:"Artist G"};

playlist.splice(4, 0, newSong);
// console.log(playlist);






//?------------------------------------
//!  `Object.assign()`
//?------------------------------------

// Updating properties of students in a class
const studentArr = [
    {id: 1, name: "Alice", grade: "A"},
    {id: 2, name: "Bob", grade: "B"},
]
// Grade updates
const gradeUpdate = [
    {grade: "A+"},
    {grade: "A"},
]

// Update the students
const updateStudents = studentArr.map((student, index) => {
    return Object.assign({}, student, gradeUpdate[index]);
});
// console.log(updateStudents);




//?------------------------------------
//!  Search and Filter Using `find()`
//?------------------------------------

// Finding the First Patient with a Special Ailment in a Hospital Databases
const patients = [
    {id: 101, name: "Sarah", disease: "Cold"},
    {id: 102, name: "Mike", disease: "Fever"},
    {id: 103, name: "Lucy", disease: "Cold"},
];
// Patient with cold
const patientWithCold = patients.find((patient) => patient.disease === "Cold");
// console.log(patientWithCold);





//?------------------------------------
//!  Search and Filter Using `some()`
//?------------------------------------
// Finding the First Patient with a Special Ailment in a Hospital Databases
const patients2 = [
    {id: 101, name: "Sarah", disease: "Cold"},
    {id: 102, name: "Mike", disease: "Fever"},
    {id: 103, name: "Lucy", disease: "Cold"},
];
// Patient with cold
const patientWithCold2 = patients.some((patient) => patient.disease === "Cold");
// console.log(patientWithCold2);





//?------------------------------------
//!  Search and Filter Using `every()`
//?------------------------------------
const myStudents = [
    {id: 1, name:"Bob", grade:"A"},
    {id: 2, name:"Alice", grade:"B"},
    {id: 3, name:"Emma", grade:"A"},
];

const allPass = myStudents.every((student) => student.grade !== "F");
console.log(allPass);