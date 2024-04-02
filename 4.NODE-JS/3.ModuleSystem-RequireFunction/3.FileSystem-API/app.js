const { log } = require('console');
const fs = require('fs')
// console.log(fs);


//! Read a file

//* Synchronous way
// const dataBuffer = fs.readFileSync("./sample.txt");
// const content = dataBuffer.toString();
// console.log(content);


//* Asynchronous way
// fs.readFile("./sample.txt", "utf-8", (err, content) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     } else {
//         console.log(content);
//     }
// })



//! Write to a file
// fs.writeFile("./new.txt", "Some new content", (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     } else {
//         console.log("File has been written");
//     }
// })


//! Appending to a file
// fs.appendFile("./new.txt", "Appended content", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File contented appended");
//     }
// })


//! Checking if a File Exists
// fs.access("./new.txt", fs.constants.F_OK, (err) => {
//     if (err) {
//         console.log("File does not exists");
//     } else {
//         console.log("File Exists");
//     }
// })


//! Delete a file
// fs.unlink("./new.txt", (error) => {
//     if (error) {
//         console.log(error);
//         return
//     } else {
//         console.log("File has been deleted");
//     }
// })


//! Using promise
//* create a new file

const fs2 = require('fs/promises')
// fs.readFile("./sample.txt", "utf-8", (err, content) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     } else {
//         console.log(content);
//     }
// })

// try {
//     const content = fs2.readFile("./sample.txt", "utf-8");
//     console.log(content);
// } catch (error) {
//     console.log(error);
// }

const readFileContent = async () => {
    try {
        const content = await fs2.readFile("./sample.txt", "utf-8");
        console.log(content);
    } catch (error) {
        console.log(error);
    }
}

readFileContent();