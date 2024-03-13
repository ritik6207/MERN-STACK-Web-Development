//? --------------------------
//! Creating Array Using Array Literal
//? --------------------------

//* Syntax
//! Declaring an array of with empty Data
const emtyArr = [];

//! Declaring an array of Numbers
const studentAges = [20, 30, 25, 35];
//! Accessing the elements of array
const firstAge = studentAges[2];
// console.log(firstAge);


//! Declaring an array of String
const dayOfTheWeek = ['SUN', 'MON','TUE','WED','THE','FRI','SAT'];

//! Declaring an array mix types
const mixedTypes = [42, 'life', true];


//? --------------------------
//! Creating Array Using Array Constructor
//? --------------------------

//! Creating an array with empty data
const emptyArray = new Array();

//! Creating an array with a predefined size (5)
const sizeDefinedArr = new Array(5);

//! Creating an array with elements
const fruitArr = new Array('Apple', 'Banana', 'Kiwi');

//! Creating an array with mixed types
const mixDataType = new Array(34, false, 'Emmal');


//? --------------------------
//! Creating Array Using Array.of()
//? --------------------------

//! Creating an array with numbers
const numArr = Array.of(1, 2, 3);

//! Creating an array with string
const strArr = Array.of('Hi', 'Im', 'programmer');

//! Creating an array with mixed type
const mixedArr = Array.of(4, 'ritik', 'r', true, false);


//? --------------------------
//! Creating Array Using Array.from()
//? --------------------------

//! cloning array
const originalArr = [1, 2, 3];
const clonedArr = Array.from(originalArr);
// console.log(clonedArr);

//! creating an array from an array-like object
const arrayLike = {0:'a',1:'b',2:'c', length:3};
const convertedArr = Array.from(arrayLike);
// console.log(convertedArr);