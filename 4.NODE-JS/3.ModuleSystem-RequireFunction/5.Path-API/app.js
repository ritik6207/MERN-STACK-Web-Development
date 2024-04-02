const { log } = require('console')
const path = require('path')
// console.log(path);

//! path.basename()
const filename = path.basename('/user/test/file.txt')
// console.log(filename);
/** 
 return the last file name 
 output:- file.txt
*/

//! path.dirname()
const fileName = path.dirname('/user/test/file.txt')
// console.log(fileName);
/*
return the folder(directory) name
 output:- /user/test
*/


//! path.extname()
const FileName = path.extname('/user/test/file.txt')
// console.log(FileName);
/*
return the extension name
 output:- .txt
*/


//! path.join()
const joinedPath = path.join("/user", "test", "file.txt");
// console.log(joinedPath);


//! path.resolve()
const absolutePath = path.resolve("text", "file.txt");
// console.log(absolutePath);


//! path.isAbsolute()
const isAbs = path.isAbsolute("user/test");  //o/p = false
const isAbss = path.isAbsolute("/user/test");  //o/p = true
// console.log(isAbs);


//! path.parse()
const parsePath = path.parse("/user/test/file.txt")
console.log(parsePath);
console.log(parsePath.dir);
console.log(parsePath.name);
console.log(parsePath.ext);