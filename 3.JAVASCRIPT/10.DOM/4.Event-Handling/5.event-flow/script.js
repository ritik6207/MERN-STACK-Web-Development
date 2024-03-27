// Add event listener to the div

document.getElementById("parentDiv").addEventListener(
  "click",
  function (event) {
    alert("Div cliked! Event Phase " + event.eventPhase);
  },
  true
); //Capturing



// Add event listener to the ul
document.getElementById("list").addEventListener(
    "click",
    function (event) {
      alert("List cliked! Event Phase " + event.eventPhase);
    },
    true
); //Capturing




// Add event listener to the li
document.getElementById("item1").addEventListener(
    "click",
    function (event) {
      alert("Item 1 cliked! Event Phase " + event.eventPhase);
    },
    false
); //Bubbling phase

document.getElementById("item2").addEventListener(
    "click",
    function (event) {
      alert("Item 2 cliked! Event Phase " + event.eventPhase);
    },
    false
); //Bubbling phase
