//? -------------------------------------------
//!=> ESCAPING CHARACTERS IN STRING
//? -------------------------------------------

//! Using backslahes before escaping
const quote = 'He said, "Hello, World"'
// console.log(quote);

//! NewLines and Tabs
const multiline = "Line 1\nLine 2 \t Tabbed";
// console.log(multiline);

//! Escaping backlashes
const filePath = "C:\\Program files\\App";
// console.log(filePath);

//! Using the Tamplate literals
const anotherQuote = `He said, "That's awsome"`;
// console.log(anotherQuote);

//! Unicode characters
const heart = "I \u2764 javaScript";
console.log(heart);

//! Escape Sequence for a Doller Sign and Curly Braces in Template Literals
const metaString = `The syntax for variable is \${variableName}`;
console.log(metaString);