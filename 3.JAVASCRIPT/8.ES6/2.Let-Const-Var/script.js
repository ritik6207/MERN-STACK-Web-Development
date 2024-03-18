// ---------------------
//! hostingIssue()
// ---------------------

//! Using Var
// hostingIssue()
function hostingIssues(){
    console.log(a);
    var a = 10;
    // console.log(a);
}
// hostingIssues()


//! Using let
function hostingIssue(){
    console.log(a);
    let a = 10;
    // console.log(a);
}
// hostingIssue()



// ---------------------
//! Block Scope
// ---------------------

//! Using var
for(var i = 0; i < 3; i++){
    // console.log(i);
}
// console.log(i);


//! Using let
for(let j = 0; j < 3; j++){
    // console.log(j);
}
// console.log(j);


//* Immutability

const x = 10;
x = 20;
console.log(x);