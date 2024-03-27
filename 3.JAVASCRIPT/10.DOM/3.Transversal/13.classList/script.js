// Select the p element
const p = document.getElementById("textElement");
// p.classList.add("highlight", "bold", "italic");
// p.classList.add("bold");
// p.classList.add("italic");

// Function to add Class
function addClass() {
  p.classList.add("highlight", "bold", "italic");
}

// Function to remove Class
function removeClass() {
  p.classList.remove("highlight", "bold", "italic");
}

// Function to  Class
function toggleClass() {
  p.classList.toggle("highlight");
}

// checkContains
function checkContains() {
  alert(
    p.classList.contains("highlight")
      ? "Contains Highlight"
      : "Does not cotain Highlight"
  );
}

// replaceClass
function replaceClass() {
  if (p.classList.contains("italic")) {
    p.classList.replace("italic", "red-text");
  } else {
    p.classList.add("red-text");
  }
}


// listItem
function listItem(){
    alert("The first class is: " + p.classList.item(0));
}


// getValue
function getValue() {
    console.log(p.classList.value);
}