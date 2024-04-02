//! Default Export

export default function(name){
    return `Hi ${name}`
}



//! Name Export

export function add(a, b){
    return a + b;
}

export function subtract(a, b){
    return a - b;
}



//! Mixed Export (default + Named)

export default function (name) {
    return `Hi ${name}`
}

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}


//! Export everything


export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}