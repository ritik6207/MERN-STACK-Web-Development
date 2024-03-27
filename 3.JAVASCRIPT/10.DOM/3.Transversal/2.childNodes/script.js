// Step 1: Select the outer div using its ID
const outerDivEl = document.getElementById("outerDiv");
// console.log(outerDivEl);

// Step 2: Navigate to the first child, which is text node
const firstChildEl = outerDivEl.childNodes[0];


// Step 3: Navigate to the second child, which is the innerDiv
const innerDiv = outerDivEl.childNodes[1];


// Step 4: Select the first child of the inner div
const innerDivFirstChildEl = innerDiv.childNodes[0];


// Step 5: Select the second child of the inner Div
const nastedListEl = innerDiv.childNodes[1];
console.log(nastedListEl);