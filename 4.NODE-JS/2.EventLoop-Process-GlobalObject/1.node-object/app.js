// ---Acessing the global object----



//! ---- Acessing the Gobal Object
global.myGlobal = "Hello from the global object"
// console.log(global.myGlobal);

//! To Check if our variable is truly global

// console.log("myGlobal" in global);     //give true because we are create an object with the name of myGlobal
// console.log("myGlobaldfdfd" in global);  //give false 


//! use '__dirname' and '__filename' (first is underscore)
// console.log(__dirname);
// console.log(__filename);



//! Using 'setInterval' and clearInterval

// let count = 0;
// const intervalId = setInterval(() => {
//     console.log("Hello World");
//     count++;
//     if (count === 5) {
//         clearInterval(intervalId)
//     }
// }, 1000)

//! setTimeout
setTimeout(() => {
    console.log("This will be delayed by 5sec");
}, 5000)