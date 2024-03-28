//! Behaving as a normal function parameter/argument/variable

// Create callback function

// function myCallbackFn() {
//     console.log("Hello this is a simple callback function");
// }

// Usage
// function logMessage(anything){
//     // execute the callback fn
//     anything();
//     // console.log(callback);
// }

// call High-Order-Function
// logMessage(myCallbackFn)


// Other way to use callback fn, first comment HOF then use
// logMessage(function () {
//     console.log("Hello this is a simple callback function");
// })



//!: Returning a callback function method 1
// function logMessage(callback){
//     // execute the callback fn
//     const result = callback();
//     // console.log(result);
//     console.log(callback());
// }

// logMessage (() => {
//     return "Hello this is a simple callback function";
// })



//! Extracting Callback function

function logMessage(callback){
    // execute the callback fn
    const result = callback();
    return result;
}
const result = logMessage (() => {
    return "Hello this is a simple callback function";
})
console.log(result);




//! Passing parameters to the callback function
const logMessageHOF = (callback) => {
    const result = callback("Ritik", "Kumar");
    console.log(result);
}

const logMessageCallbackFn = (firstName, lastName) => {
    return `Hello ${firstName}  ${lastName} this is a simple CB`;
}

// Call HOF
logMessageHOF(logMessageCallbackFn);


//! HOF with parameter and call back function

const calculateSumHOF = (a, b, callback) => {
    const result = a + b;
    callback(result);
}

calculateSumHOF(2, 3, (result) => {
    console.log(result);
})