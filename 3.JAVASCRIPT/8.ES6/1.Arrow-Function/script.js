//! Basic Syntax
const multiply = (a, b) => a * b;
const result = multiply(4, 7);


//! Block Body Syntax
// const greet = (name) => {
//     return `Hello ${name}`;
// }

const greet = (name) => `Hello ${name}`;

const greetFn = greet("Ritik");

//! Single Paremeter, No Parentheses
const square = x => x * x;
const squareFn = square(5);


//! No Parameters
const random = Math.random();
// console.log(random);


//! Object Literal Return
// const getUser = () => {
//     return {
//         name:"Ritik",
//         age:21,
//     };
// };

const getUser = () => ({ name:"Ritik",
age:21,})

const getUserFn = getUser();