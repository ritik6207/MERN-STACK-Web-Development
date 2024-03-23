// Acessing Parent Elements

const parentEl = document.getElementById("parent");

// Accessing the grand parent elements
const grandparentEl = parentEl.parentNode;
// console.log(parentEl.parentNode);
// console.log(grandparentEl);


// Accessing Child Elements
const fistChildEl = parentEl.firstChild;
const lastChildEl = parentEl.lastChild;
console.log(fistChildEl);
console.log(lastChildEl);



// Accessing Elements Children Only
const firstElementChildEl = parentEl.firstElementChild;
const lastElementChildEl = parentEl.lastElementChild;
console.log(firstElementChildEl);
console.log(lastElementChildEl);
