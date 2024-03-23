// Selecting all elements with the class name "fiction"

const fictionBookEl = document.getElementsByClassName("fiction");
// console.log(fictionBookEl);


// Selecting all elements with the class name "non-fiction" within the nonFictionSection
const nonFictionEl = document.getElementById("nonFictionSection");
const nonFictionBooksInSectionEl = nonFictionEl.getElementsByClassName("non-fiction");
// console.log(nonFictionBooksInSectionEl[0]);
// console.log(fictionBookEl);
// Loop throught the HTMLCollection

// First Convert inot an array
const fictionBookElArr = Array.from(fictionBookEl);
// console.log(fictionBookElArr);


const fictionBookElTitle = fictionBookElArr.map((el) => el.innerHTML);
console.log(fictionBookElTitle);