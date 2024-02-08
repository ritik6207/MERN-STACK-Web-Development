//! converting in upperCase
const localCase = `Hello World`;
// console.log(localCase.toUpperCase());

//! converting in LowerCase
const uperlCase = `Hello World`;
// console.log(uperlCase.toLowerCase());

//! case-insensitive comparison
const st1 = 'Javascript';
const st2 = 'javascript';

if(st1.toLowerCase() === st2.toLowerCase()){
    // console.log('The string are equal, ignoring the case');
}

//! Note:- on non-english characters
const accentedStr = 'àèìòù';
// console.log(accentedStr.toUpperCase());

//?------------------
// ! => STRING LENGTH()
//?------------------

// ! Find the length of a string
const myStr = "Hello World";
// console.log(myStr.length);

// ! Check for empty string
const emptyStr = "";
// console.log(emptyStr.length);

// ! String Validation
const username = "ritik342";
if(username.length >= 6){
    console.log('Valid username');
}else{
    console.log('Invalid use, Must be at least 6 characters');
}

//?------------------
// ! => STRING SLICE()
//?------------------

// ! Basic Use
const greeting = 'Hello, World';
const extracteWord = greeting.slice(7, 13);
// console.log(extracteWord);

// ! Omitting the end index
const text = 'Hello, World';
const result = text.slice(7, 9);
// console.log(result);

// ! Using negative indices
const phrase = 'Hello, world';
const endingText = phrase.slice(-8);
// console.log(endingText);

// ! Using negative indices between
const sen = 'Hello, world';
// console.log(sen.slice(-6, -1));


//?------------------
// ! => STRING SPLIT()
//?------------------


// ! Simple split by sapce
const mySen = 'Hello, world';
const word = mySen.split(',');
// console.log(word);

// ! Limit number od split
const fruits = 'apple,banana,pear';
const limitedFruits = fruits.split(',' , 2);
// console.log(limitedFruits);

// ! Split by multiple characters
const complexText = 'apple:banana;pear';
const mixedFruits = complexText.split(/[:;]/);
// console.log(mixedFruits);

// ! Split into characters
const word1 = 'Ritik';
const letters = word1.split("");
// console.log(letters);


//?------------------
// ! => STRING INDEXOF()
//?------------------

//!Basic uses
const sentences = "Hello, world";
const index = sentences.indexOf('hello');

//?------------------
// ! => STRING TRIM()
//?------------------

//! Trimming use input
const userInput = '   ritik@gmail.com  ';
const emailTrimmed = userInput.trim();

//! Rmoveing Line Breaks
const stringWithBreaks = '\n\t Hello, world';
const cleanString = stringWithBreaks.trim();


//?------------------
// ! => STRING REPLACE()
//?------------------

//! Basic usage
const originalText = 'This is an old text.';
const updatedText = originalText.replace('old', 'new');

//! Replace all occurances
const repititiveText = 'old text with old words.';
const replaceAll = repititiveText.replace(/old/g, 'new');

//?------------------
// ! => STRING LASTINDEXOF()
//?------------------

//! Basic usage
const myText = 'apple orange, apple, banana';
const lastInx = myText.lastIndexOf('apple');

//! Specifying the from index
const result1 = myText.lastIndexOf('apple',12);


//?------------------
// ! => STRING INCLUDES()
//?------------------

//! Basic usage
const myDumy = 'I have an apple';
const dumyCheck = myDumy.includes('Apple');

//! Checking for a character
const res = myDumy.includes('I');

//! Specifying specific position
const rest = myDumy.includes('apple', 8);



//?-----------------------------
// ! => STRING CONVERSION======
//?-----------------------------

//! Converting a number to a string
const num = 42;
const strNum = String(num);
// console.log(typeof strNum); 

//! Converting a boolean to a string
const boolVal = true
const strBool = String(boolVal);

//! Converting an Array to a string
const arr = [1, 2, 3];
const strArray = String(arr);

//! Converting an Object to a string
const obj = {name: 'Ritik', age:22};
// console.log(typeof String(obj));
const objStr = String(obj);

//! Converting null and undefined to a string
const strNull = String(null);
// console.log(typeof strNull);


//?-----------------------------
// ! => .toString()
//?-----------------------------

//! Convert number to string
const num1 = 25;
const strNum1 = num1.toString();
console.log(typeof strNum1);

//! Convert boolean to string
const boolVal1 = false;
// console.log(typeof boolVal1.toString());



//?-----------------------------
// ! => String to Number
//?-----------------------------

//! Converting pixel value to number with parseInt()
const pixelValueAsString = '420px';
const convertedVal = parseInt(pixelValueAsString);
// console.log(convertedVal + 10);

//! Converting Dimension String to Number with parseFloat()
const dmension = "43.6";
const convertedVal1 = parseFloat(dmension);

//! Convertign Age Input to Number using Number()
const ageInp = "42";
const conVal = Number(ageInp);

//! Quick Conversion using Unary + Operation
const scoreStr = '100';
const conVal1 = +scoreStr;


//?-----------------------------
// ! => String to Boolean
//?-----------------------------

//! Using Boolean() for form Validation
const usernameInput = 'ritik';
const convalue = Boolean(usernameInput);
// console.log(convalue);

//! Using Boolean() with Empty String
const emptyField = "";
const conValue = Boolean(emptyField);
// console.log(conValue);

//! Using Double Negation !! for Quick Conversion
const emailInput = 'ritik@gmail.com';
const Con = !!emailInput;
console.log(Con);