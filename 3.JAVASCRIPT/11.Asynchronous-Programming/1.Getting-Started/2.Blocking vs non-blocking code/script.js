// // Create a blocking 
// console.log("Starting Blocking Operation");

// // Create blocking code
// for(let i = 0; i < 1e9; i++){
//     // Simulate some operation
//     console.log(i); // freze the system , don't comment out
// }
// console.log("Finished Blocking Operation");



// Create a non blocking 
console.log("Starting non-Blocking Operation");

setTimeout(()=>{
    console.log("Executing delay");
}, 4000)

console.log("Finished non-Blocking Operation");
