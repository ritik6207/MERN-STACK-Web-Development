//!---------
//! Syntax of Function Declaration
//!---------
// say Hello
function sayHello(){
    // Logic goes here
    // write any logic
    console.log('Hello World!');
}
//! Calling the Functions/Invoke/Use the functions
// sayHello()


// Greeting
function greetings() {
    console.log('Welcome to Full Stack Developer');
}
//! Calling the Functions/Invoke/Use the functions
// greetings()

// Show Date
function showDate() {
    const currentDate = new Date();
    console.log(`Today date is ${currentDate}`);
}
//! Calling the Functions/Invoke/Use the functions
// showDate()



//!---------
//! Functions Expression
//!---------

// function hiHello(){
//     console.log('Hello World!');
// }

// function expression
const hiHello = function(){
    console.log('Hello World!');
}
//! Invoke
// hiHello()

const todayDate = function(){
    const currDate = new Date();
    console.log(`Today date is ${currDate}`);
}
//! Invoke
// todayDate()


//! Determines if a fixed number(e.g., 4) is even or odd
const checkEvenOdd = function(){
    const number = 8;
    if(number % 2 === 0){
        console.log('This is an even number');
    }else{
        console.log('This is an odd number');
    }
}

// checkEvenOdd()


//!---------
//! Anonymous Functions
//!---------
// function(){
//     console.log('Welcome');
// }


//!---------
//! Immediately Invoked Functions Expression(IIFE)
//!---------

// (function () {
//     console.log("Welcome");
// })();


// Calculating Square of a Number
// (function () {
//     const num = 5;
//     const square = num * num;
//     console.log(square);
// })();


//!---------------
//!  Functions Parameters vs Agruments
//!---------------
//! DRY = Don't Repeat Yourself
const greeting = function(name, age){
    console.log(`Welcome ${name} your age is:${age} years`);
}
// greeting("Ritik", 22);
// greeting("Sudha", 24);

// Add two numbers
const addTwoNumber = function(a,b){
    const result = a + b;
    console.log("Sum of two number is: " , result);
}
// addTwoNumber(2,5);



//!---------------
//!  Default paremeters
//!---------------

const greet = function(name = "Ritik", age = 22){
    console.log(`Hello, my name is ${name}, and I am ${age} years old`);
}
// greet("Supriya", 23);

// Default Paremeters with Expression
const multiply = function(a, b = a * 2){
    const result = a * b;
    console.log(`The Result is: ${result}`);
};
// multiply(2);


//!---------------
//!  Return Statement
//!---------------
// Basic Return Statement
const add = function(a, b){
    const result = a + b;
    return result;
}
const addResult = add(3, 5);
// console.log(addResult);



// Return Statement with Conditions
function isEven(num)
{
    if(num % 2 === 0){
        return 'It is an even Number';
    }else{
        return 'It is not an even Number';
    }
};

// console.log(isEven(5));



//!---------------
//!  Function Scope
//!---------------
// Local Variable in Function
function showLocalVariable(){
    const localVar = 'I am a local variable';
    console.log(localVar);
}
// console.log(localVar);
// showLocalVariable();

//! Variable in Outer and Innner Functions
const globalVar = 'I am a global variable'
function outerFn(){
    const outerVar = 'I am an outer variable';
    console.log(globalVar);
    function innerFn(){
        const innerVar = 'I am an inner Variable';
        console.log(outerVar);
        console.log(innerVar);
    }
    innerFn()
}
outerFn()