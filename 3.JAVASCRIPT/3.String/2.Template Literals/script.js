//? -------------------------------------------
//!=> TEMPLATE LITERALS
//? -------------------------------------------

//! Basic usage
const greeting = `Hello world`;
// console.log(greeting);

//! String interploation
const username = "Ritik";
const welcomeMessage = `Hello, ${username}! welcome to our website`;
// console.log(welcomeMessage);

//! Multiline-String
const poem = `
Roses are red,
violets are blue,
Sugar is sweet,
And so are you?
`;
console.log(poem);

//! Expression evaluation
const price = 10;
const tax = 0.05;
const total = `The price: ${price * (1 + tax)}`;
// console.log(total);

//! Escaping backtics
const stringWithBacktick = `He's a backtics \``;
// console.log(stringWithBacktick);