//! --> Using the + operator
const firstName = 'Ritik';
const lastName = 'Kumar';
const fullName = firstName + " " + lastName;
console.log(fullName);

//! --> Using the .concat() method
const s1 = "Hello";
const s2 = "World";
const combineStr = s1.concat(" ", s2);
console.log(combineStr);

//! --> Template literal
const fruit = 'apple';
const color = 'red';
const sentence = `The ${fruit} is ${color}`;
console.log(sentence);