//! Basic
const numbers = [1, 2, 3, 4];
const [first, second, third, fourth] = numbers;
// console.log(second);
// console.log(numbers[1]);


//! swap variables
let a = 1;
let b = 2;

[a, b] = [b, a];
// console.log(a, b);


//! Object Destruturing
// Extract user data
const {name, age, email} = {
    name:"Ritik",
    age:22,
    email:"support@ritik.com"
};
console.log(name);
console.log(age);
console.log(email);


//! Destruturing in Function Parameters
function greet ({name, age}) {
    console.log(`Hello, ${name}, your age is ${age}`);
}

const myUser = {
    name:"Ritik Kumar",
    age:22
}
greet(myUser);



//! Nested Destruturing
const {id, info:{Name, Age}, address:{At, city, State},} = {
    id:1,
    info:{
        Name:"Ritik Kumar",
        Age:22
    },
    address:{
        At:"178-Press-Colony",
        city:"Bopal",
        State:"Madhay Predesh",
    },
};

console.log(id);
