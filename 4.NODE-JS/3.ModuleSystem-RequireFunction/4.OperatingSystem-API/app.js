const os = require('os')
// console.log(os);

//! os.arch()
// console.log("CPU Architecture: ", os.arch());


//! os.cpus()
// console.log("CPU info: ", os.cpus());



//! os.endianness()
// console.log(os.endianness());

/*
return values of `os.endianness()` are:

"BE" (Big Endian): The most significant byte is stored at the lowest memory address.
"LE" (Little Endian): The least significant byte is stored at the lowest memory address.
*/


//! os.freemem()
// console.log("Free Memory in byte : ", os.freemem());


//! os.homedir()
// console.log("Home Directory: ", os.homedir());


//! os.hostname()
// console.log(os.hostname());


//! os.loadavg()
// console.log(os.loadavg());


//! os.networkInterfaces()
// console.log(os.networkInterfaces());


//! os.platform()
// console.log(os.platform());


//! os.release()
// console.log(os.release());


//! os.totalmem()
console.log("Total Memory in byte : ", os.totalmem());