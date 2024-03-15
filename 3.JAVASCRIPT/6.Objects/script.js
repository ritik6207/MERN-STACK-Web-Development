//!---------------------------
//! Creating Object Using Objects Literals
//!---------------------------

// Define an object to represent a book in a bookstore
const book = {
    title: 'Atomic habits',
    author: 'James Clear',
    available: true,
    price: 9.14,
    pages: 306
}

//!---------------------------
//! Access object properties using the dot notatinos(.)
//!---------------------------
// const bookTitle = book.title
// console.log(book.author);



//!---------------------------
//! Access object properties using the Bracket Notatinos
//!---------------------------
const bookTitle = book['title']
// console.log(bookTitle);
// console.log(book['author']);
// console.log(book['pages']);


//!  Properties with Specital Chareacter
const person = {
    'first name': 'Ritik',
    'last name': 'kumar'
}
// console.log(person['first name']);
// console.log(person['last name']);


//! Using Eperessions
const task = {
    description: 'Finish homeworks',
    isCompleted: false
}
const query = 'isCom' + 'pleted'
// console.log(task[query]);


//!---------------------------
//! Adding properties to objects
//!---------------------------
const userProfile = {
    username: 'ritik231',
    email: 'support@tech.io',
    // Nested Properties
    portfolio:{
        work1:'Landing page',
        work2:'Web App'
    }
}
// Add user role

// userProfile.role = 'admin';
userProfile['role'] = 'SuperAdmin';

// console.log(userProfile);


//! Adding properties with special Characters
const book1 = {
    title: 'Atomic habits',
}
book1['publication year'] = 2025;
// console.log(book1);

//! Adding Nested Properties
const employee = {
    name:'Ritik Kumar',
    department: 'Software Engineer'
}
// Add address, with nested properties
employee.address = {
    city:'Bhopal',
    state:'MP'
}

console.log(employee);
console.log(employee.address.city);