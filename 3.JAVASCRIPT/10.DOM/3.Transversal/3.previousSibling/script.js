// select buttons
const button1El = document.getElementById("button1")
const button2El = document.getElementById("button2")


// use previousSibling to get the preceeding paragraph element
const text1 = button1El.previousSibling;
const text2 = button2El.previousSibling;

// console.log(text1);



// Change the text content of the preceedig paragraph
if(text1.nodeType === 3){
    text1.textContent = 'Text 1 has been updated'
}

if(text2.nodeType === 3){
    text2.textContent = 'Text 2 has been updated'
}