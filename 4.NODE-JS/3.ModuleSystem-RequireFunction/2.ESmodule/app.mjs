//! Default Import
import greet from "./utills.mjs";
console.log(greet("Ritik")); //greet is function name 


//! Name Import
import {add, subtract} from './utills.mjs';
console.log(add(23, 5));
console.log(subtract(23, 5));


//! Mixed Import (default + Named)
import greet, {add, subtract} from "./utills.mjs"
console.log(greet("Ritik"));
console.log(add(5, 7));
console.log(subtract(8, 4));


//! Import everything
import * as utill from "./utills.mjs"
console.log(utill.add(3, 4));
console.log(utill.subtract(5, 4));