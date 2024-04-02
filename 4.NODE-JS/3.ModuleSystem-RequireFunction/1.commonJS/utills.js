// --------ways of exporting modules in csjs--------
//! Single Function Export

// const firstName = "Ritik";

// // Export this file

// const greet = (name) => {
//     return `Hello ${name}`
// }

// module.exports = greet;




//! Object export

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// module.exports = {
//     add,
//     subtract,
// }

// module.exports = {
//     myAdd: add,
//     mySubtract: subtract,
// }


//? add another way
// module.exports = {
//     add: function(a, b) {
//         return a + b;
//     },
//     subtract: function(a , b){
//         return a - b;
//     }
// }


//! Named function export

// module.exports.sayHi = (name) => {
//     return `Hi ${name}`;
// }

// module.exports.sayBye = function(name) {
//     return `GoodBye ${name}`;
// }

//! Using export short hand

exports.sayHi = (name) => {
    return `Hi ${name}`;
}

exports.sayBye = function(name) {
    return `GoodBye ${name}`;
}